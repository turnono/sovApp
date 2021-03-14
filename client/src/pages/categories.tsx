import React, { Fragment, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { gql, useQuery } from "@apollo/client";
import { Header, Button, Loading } from "../components";
import * as GetCategoryListTypes from "./__generated__/GetCategoryList";
import { css } from "react-emotion";
import { Modal, ModalTransition, useModal } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import Joke from "./joke";

export const GET_CATEGORIES = gql`
  query GetCategoryList {
    categories
  }
`;

interface CategoriesProps extends RouteComponentProps {}

const Categories: React.FC<CategoriesProps> = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [selectedCat, setSelectedCat] = useState("");
  const { data, loading, error } = useQuery<
    GetCategoryListTypes.GetCategoryList
  >(GET_CATEGORIES);

  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const newData: string[] | any[] = data.categories
    ? Object.values(data.categories)
    : [];

  const openM = (category: string) => {
    setSelectedCat(category);
    openModal();
  };

  return (
    <Fragment>
      <Header />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100% 100%",
          gridGap: 5,
          width: "50%",
        }}
      >
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
        onBackdropClick={closeModal}
      >
        <button
          style={{
            position: "absolute",
            right: 15,
            top: 15,
            color: "white",
            backgroundColor: "red",
          }}
          onClick={closeModal}
        >
          Close
        </button>
        <Joke category={selectedCat} />
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
