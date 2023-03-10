import { createContext } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const isBrowser = typeof window !== "undefined"

const initialState = isBrowser ? window.__INITIAL_STATE__ : {}

export function initApollo(ssrMode = true) {
    return new ApolloClient({
        uri: "https://portifolio-api-pi.vercel.app/", //"http://localhost:9001/",
        cache: new InMemoryCache().restore(initialState),
        ssrMode
    });
}

export default createContext(initialState);