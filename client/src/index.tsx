import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import App from "./App";
import { client } from "./graphql";
import "./index.css";

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
