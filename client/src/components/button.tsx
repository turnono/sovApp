import styled from "react-emotion";
import { lighten } from "polished";

import { colors } from "../styles";

const height = 50;
export default styled("button")({
  display: "block",
  minWidth: 200,
  height,
  border: "none",
  borderRadius: height / 2,
  fontFamily: "inherit",
  fontSize: 18,
  lineHeight: `${height}px`,
  fontWeight: 700,
  textTransform: "uppercase",
  cursor: "pointer",
  outline: "none",
  color: "black",
  marginTop: 10,
  textDecoration: "none",
  textAlign: "center",
  marginLeft: 50,
  marginRight: 50,
  width: "90%",
  ":hover": {
    backgroundColor: lighten(0.1, colors.accent),
  },
  ":active": {
    backgroundColor: lighten(0.2, colors.accent),
  },
});
