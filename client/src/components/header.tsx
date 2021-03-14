import React from "react";
import styled from "react-emotion";
import { size } from "polished";
import { unit } from "../styles";
import chuck from "../assets/images/chucknorris1.png";

interface HeaderProps {
  image?: string | any;
  children?: any;
}

const Header: React.FC<HeaderProps> = ({
  image = chuck,
  children = "CHUCK NORRIS JOKES",
}) => {
  return (
    <Container>
      <Image round={!image} src={image} alt="Chuck Norris" />
      <div>
        <h1>{children}</h1>
      </div>
    </Container>
  );
};

export default Header;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: unit * 4.5,
  fontFamily: "Leckerli One",
});

const Image = styled("img")(size(134), (props: { round: boolean }) => ({
  marginRight: unit * 2.5,
  borderRadius: props.round ? "50%" : "0%",
}));
