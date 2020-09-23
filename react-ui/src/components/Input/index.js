/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledInput, { Prefix, Suffix, InputContainer } from "./style";
import Icon from "../Icon";
import { ReactComponent as SearchIcon } from "stories/assets/icons/search.svg";
import { useTheme } from "styled-components";
import InputText from "./InputText";

function Input({
	placeholder = "please enter something",
	prefix,
	suffix,
	...rest
}) {
	return (
		<InputContainer {...rest}>
			{prefix && <Prefix>{prefix}</Prefix>}
			<StyledInput placeholder={placeholder} />
			{suffix && <Suffix>{suffix}</Suffix>}
		</InputContainer>
	);
}

function Search({ placeholder = "please enter something", ...rest }) {
	const theme = useTheme();
	return (
		<Input
			placeholder={placeholder}
			prefix={
				<Icon
					icon={SearchIcon}
					color={theme.grey3}
					width={18}
					height={18}
				/>
			}
			{...rest}
		/>
	);
}

Input.Search = Search; //Search 作为 Input 的子组件
Input.Text = InputText;

Input.propTypes = {
	placeholder: PropTypes.string,
	prefix: PropTypes.any,
	suffix: PropTypes.any,
};

export default Input;
