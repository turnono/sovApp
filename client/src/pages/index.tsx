import React, { Fragment } from "react";
import { Router } from "@reach/router";
import Categories from "./categories";
import { PageContainer } from "../components";
import { ModalProvider } from "react-simple-hook-modal";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Pages() {
  return (
    <Fragment>
      <Provider store={store}>
        <PageContainer>
          <ModalProvider>
            <Router primary={false} component={Fragment}>
              <Categories path="/" />
            </Router>
          </ModalProvider>
        </PageContainer>
      </Provider>
    </Fragment>
  );
}
