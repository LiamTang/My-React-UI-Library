import React from "react";

import styled from "styled-components";
import theme from "./theme";

const StyledButton = styled.div`
  width: ${(props) => props.width || "80px"};
  background-color: ${({ theme }) => theme.primaryColor};
`;

function Button({ width, onClick, label, children }) {
  return (
    <StyledButton width={width} onClick={onClick}>
      <button>{label}</button>
      {children}
    </StyledButton>
  );
}

export default Button;
