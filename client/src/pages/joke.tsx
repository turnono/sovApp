import React, { Fragment, useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
import { Loading } from "../components";
import { RouteComponentProps } from "@reach/router";
import * as JokeDetailsTypes from "./__generated__/JokeDetails";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store";

export const GET_JOKE_DETAILS = gql`
  query JokeDetails($category: String!) {
    getRandomJokeByCategory(category: $category) {
      value
    }
  }
`;

interface JokeProps extends RouteComponentProps {}

const Joke: React.FC<JokeProps> = () => {
  const currentCategory = useSelector<State, State["currentCategory"]>(
    (state) => state.currentCategory
  );

  const { data, loading, error } = useQuery<
    JokeDetailsTypes.JokeDetails,
    JokeDetailsTypes.JokeDetailsVariables
  >(GET_JOKE_DETAILS, {
    variables: { category: currentCategory },
    nextFetchPolicy: "no-cache",
    fetchPolicy: "no-cache",
  });

  const dispatch = useDispatch();

  useMemo(
    () =>
      dispatch({
        type: "SET_JOKE",
        payload: data?.getRandomJokeByCategory?.value,
      }),
    [data, dispatch]
  );

  const joke = useSelector<State, State["joke"]>((state) => state.joke);

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Header category={currentCategory} />
      <h3>{joke}</h3>
    </Fragment>
  );
};

export default Joke;

export const Header = (category: any) => {
  return (
    <h2
      style={{
        marginBottom: 60,
        textShadow: "0 2px rgb(0 0 0 / 15%)",
        textDecoration: "underline",
      }}
    >
      CATEGORY: {category.category.toUpperCase()}
    </h2>
  );
};
