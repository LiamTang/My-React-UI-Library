/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "components/Button";

import React from "react";

function SocialIcon({ icon, bgColor, href, ...rest }) {
	return (
		<Button
			size="30px"
			bgColor={bgColor}
			onClick={() => href && window.open(href, "_blank")}
			{...rest}
		>
			<FontAwesomeIcon icon={icon} style={{ fontSize: "16px" }} />
		</Button>
	);
}

export default SocialIcon;
