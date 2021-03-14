import React, { Fragment, useEffect, useMemo, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { gql, useQuery } from "@apollo/client";
import { Header, Button, Loading } from "../components";
import * as GetCategoryListTypes from "./__generated__/GetCategoryList";
import { css } from "react-emotion";
import { Modal, ModalTransition, useModal } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import Joke from "./joke";
import { store } from "../store";

export const GET_CATEGORIES = gql`
  query GetCategoryList {
    categories
  }
`;

interface CategoriesProps extends RouteComponentProps {}

const Categories: React.FC<CategoriesProps> = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { data, loading, error } = useQuery<
    GetCategoryListTypes.GetCategoryList
  >(GET_CATEGORIES);

  useMemo(() => store.dispatch({ type: "SET_CATEGORIES", payload: data }), [
    data,
  ]);

  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const newData: string[] | any[] = data.categories
    ? Object.values(data.categories)
    : [];

  const openM = (category: string) => {
    store.dispatch({ type: "SET_CURRENT_CATEGORY", payload: category });
    openModal();
  };

  const closeM = () => {
    closeModal();
    setTimeout(() => {
      store.dispatch({ type: "REMOVE_CURRENT_CATEGORY" });
      store.dispatch({ type: "REMOVE_JOKE" });
    }, 50);
  };

  const closeButtonClass = css`
    position: absolute;
    right: 15px;
    top: 15px;
    color: white;
    background-color: red;
  `;

  const gridClass = css`
    display: grid;
    grid-template-columns: 100% 100%;
    grid-gap: 5px;
    width: 50%;
  `;

  return (
    <Fragment>
      <Header />
      <div className={gridClass}>
        {newData.map(
          (category: string | [], idx) =>
            typeof category === "string" && (
              <Button
                style={{ backgroundColor: ranColor() }}
                key={idx}
                onClick={() => openM(category)}
              >
                <h3>{category.toUpperCase()}</h3>
              </Button>
            )
        )}
      </div>

      <Modal
        id="joke-modal"
        isOpen={isModalOpen}
        transition={ModalTransition.BOTTOM_UP}
        modalClassName={css({ backgroundColor: ranColor(), maxHeight: 50 })}
        onBackdropClick={closeM}
      >
        <button className={closeButtonClass} onClick={closeM}>
          Close
        </button>
        <Joke store={store} />
      </Modal>
    </Fragment>
  );
};

export default Categories;

const ranColor = () => {
  const red = Math.floor(((1 + Math.random()) * 256) / 2);
  const green = Math.floor(((1 + Math.random()) * 256) / 2);
  const blue = Math.floor(((1 + Math.random()) * 256) / 2);
  return `rgb(${red}, ${green}, ${blue})`;
};
