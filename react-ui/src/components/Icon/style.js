import styled from "styled-components";

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /** svg 和 它下面所有的子元素 */
  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : "")}
    ${({ opacity }) => (opacity ? `opacity: ${opacity}` : "")}
  }
`;

export default StyledIcon;
