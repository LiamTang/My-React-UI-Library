/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledEmoji from "./style";

function Emoji({ children, label, ...rest }) {
	return (
		<StyledEmoji role="img" height="15px" aria-label={label} {...rest}>
			{children}
		</StyledEmoji>
	);
}

Emoji.propTypes = {
	children: PropTypes.any,
	label: PropTypes.string,
};

export default Emoji;
