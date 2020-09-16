import styled from "styled-components";

const StyledInput = styled.input`
	width: 100%;
	height: 48px;
	border: none;
	outline: none;
	background: none;
	color: ${({ theme }) => theme.greyDark};
	font-size: ${({ theme }) => theme.medium};
	display: block;
	&::placeholder {
		color: ${({ theme }) => theme.grey3};
	}
`;

const Prefix = styled.div`
	margin-right: 16px;
`;

const Suffix = styled.div`
	margin-left: 16px;
`;

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.grey2};
	padding: 0 30px;
	border-radius: 24px;
`;

export default StyledInput;
export { Prefix, Suffix, InputContainer };
