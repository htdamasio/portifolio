import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { initApollo } from "./context/apollo";
import { ApolloProvider } from "@apollo/client/react";

function Client() {
  const client = initApollo(false)

  return (
    <ApolloProvider client={client}>
      <RemixBrowser />
    </ApolloProvider>
  )
}

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <Client />
      </StrictMode>
    );
  });
}

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
