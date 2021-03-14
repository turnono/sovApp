import styled, { keyframes } from "react-emotion";
import { size } from "polished";

import { ReactComponent as Logo } from "../assets/chucknorris.svg";
import { colors } from "../styles";

const spin = keyframes`
  to {
    transform: rotate(45deg);
  }
`;

const Loading = styled(Logo)(size(64), {
  height: 564,
  margin: "auto",
  fill: "black",
  width: "100%",
  left: "-100px",
  position: "absolute",
  path: {
    transformOrigin: "bottom",
    animation: `${spin} 1s linear infinite`,
  },
});

export default Loading;

// height: 64px; */
// /* width: 64px; */
// margin: auto;
// height: 300px;
// fill: black;
// width: 100%;
// display: block;
// /* text-align: center; */
// /* margin: auto; */
// bottom: -100px;
// left: -100px;
// /* padding: 200px; */
// position: relative;
