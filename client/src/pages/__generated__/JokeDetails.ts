/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: JokeDetails
// ====================================================

export interface JokeDetails_getRandomJokeByCategory {
  __typename: "RandomJoke";
  value: string | null;
}

export interface JokeDetails {
  getRandomJokeByCategory: JokeDetails_getRandomJokeByCategory | null;
}

export interface JokeDetailsVariables {
  category: string;
}
