import { PassThrough } from "stream";
import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import ApolloContext, { initApollo } from "./context/apollo";
import { ApolloProvider } from "@apollo/client/react";
import { getDataFromTree } from "@apollo/client/react/ssr";

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return isbot(request.headers.get("user-agent"))
    ? handleBotRequest(
      request,
      responseStatusCode,
      responseHeaders,
      remixContext
    )
    : handleBrowserRequest(
      request,
      responseStatusCode,
      responseHeaders,
      remixContext
    );
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const client = initApollo();

  const App = (
    <ApolloProvider client={client}>
      <RemixServer context={remixContext} url={request.url} />
    </ApolloProvider>
  );
  return getDataFromTree(App).then(() => {
    const initialState = client.extract();

    return new Promise((resolve, reject) => {
      let didError = false;

      const { pipe, abort } = renderToPipeableStream(
        <ApolloContext.Provider value={initialState}>
          {App}
        </ApolloContext.Provider>,
        {
          onAllReady() {
            const body = new PassThrough();

            responseHeaders.set("Content-Type", "text/html");

            resolve(
              new Response(body, {
                headers: responseHeaders,
                status: didError ? 500 : responseStatusCode,
              })
            );

            pipe(body);
          },
          onShellError(error: unknown) {
            reject(error);
          },
          onError(error: unknown) {
            didError = true;

            console.error(error);
          },
        }
      );

      setTimeout(abort, ABORT_DELAY);
    });
  });
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const client = initApollo();

  const App = (
    <ApolloProvider client={client}>
      <RemixServer context={remixContext} url={request.url} />
    </ApolloProvider>
  );
  return getDataFromTree(App).then(() => {
    const initialState = client.extract();

    return new Promise((resolve, reject) => {
      let didError = false;

      const { pipe, abort } = renderToPipeableStream(
        <ApolloContext.Provider value={initialState}>
          {App}
        </ApolloContext.Provider>,
        {
          onShellReady() {
            const body = new PassThrough();

            responseHeaders.set("Content-Type", "text/html");

            resolve(
              new Response(body, {
                headers: responseHeaders,
                status: didError ? 500 : responseStatusCode,
              })
            );

            pipe(body);
          },
          onShellError(err: unknown) {
            reject(err);
          },
          onError(error: unknown) {
            didError = true;

            console.error(error);
          },
        }
      );

      setTimeout(abort, ABORT_DELAY);
    });
  });
}
