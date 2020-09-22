import React from "react";
import PropTypes from "prop-types";
import StyledSeperate from "./style";

function Seperate({children,...rest}) {
  return (
    <StyledSeperate {...rest}>
      {children}
    </StyledSeperate>
  );
}

Seperate.propTypes = {
  children: PropTypes.any
};

export default Seperate;
