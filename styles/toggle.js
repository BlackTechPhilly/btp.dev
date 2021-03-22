import { func, string } from "prop-types";
import styled from "styled-components";
import { Button } from "react-bootstrap";

import { FaRegMoon, FaRegSun } from "react-icons/fa";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <Button
      onClick={toggleTheme}
      style={{ backgroundColor: "#008be0", border: "#008be0" }}
    >
      <FaRegMoon />|
      <FaRegSun />
    </Button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
