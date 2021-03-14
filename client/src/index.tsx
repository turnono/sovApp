import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
} from "@apollo/client";
import { cache } from "./cache";
import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import injectStyles from "./styles";
const rootEl = document.querySelector("#root");

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
});

injectStyles();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  rootEl
);
