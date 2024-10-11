import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});
const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export { InputBox, Link, VisuallyHiddenInput };
