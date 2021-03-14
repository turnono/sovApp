import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { Loading } from "../components";
import { RouteComponentProps } from "@reach/router";
import * as JokeDetailsTypes from "./__generated__/JokeDetails";

export const GET_JOKE_DETAILS = gql`
  query JokeDetails($category: String!) {
    getRandomJokeByCategory(category: $category) {
      value
    }
  }
`;

interface JokeProps extends RouteComponentProps {
  category?: string;
}

const Joke: React.FC<JokeProps> = ({ category }) => {
  const { data, loading, error } = useQuery<
    JokeDetailsTypes.JokeDetails,
    JokeDetailsTypes.JokeDetailsVariables
  >(GET_JOKE_DETAILS, {
    variables: { category } as any,
    nextFetchPolicy: "no-cache",
    fetchPolicy: "no-cache",
  });

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Header category={category} />
      <h3>{data.getRandomJokeByCategory?.value}</h3>
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
