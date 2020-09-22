/** @format */

import styled, { css } from "styled-components";
import StyledText from "components/Text/style";

const StyledParagraph = styled(StyledText)`
	margin: 2px;
	${({ ellipsis }) =>
		ellipsis &&
		css`
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		`}
`;

export default StyledParagraph;
