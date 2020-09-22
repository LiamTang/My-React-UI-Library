/** @format */

import StyledIcon from "components/Icon/style";
/** @format */

import styled from "styled-components";

const Title = styled.div`
	display: grid;
`;

const Actions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	${StyledIcon} {
		cursor: pointer;
	}
`;

const StyledTitleBar = styled.div`
	display: grid;
	grid-template-columns: 62px 1fr 112px;
	align-items: center;
	max-height: 110px;
	padding: 30px;
	border-bottom: 1px solid ${({ theme }) => theme.grey4};
`;

export default StyledTitleBar;
export { Title, Actions };
