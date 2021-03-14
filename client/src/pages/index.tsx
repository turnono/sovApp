import React, { Fragment } from "react";
import { Router } from "@reach/router";
import Categories from "./categories";
import { PageContainer } from "../components";
import { ModalProvider } from "react-simple-hook-modal";

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <ModalProvider>
          <Router primary={false} component={Fragment}>
            <Categories path="/" />
          </Router>
        </ModalProvider>
      </PageContainer>
    </Fragment>
  );
}
