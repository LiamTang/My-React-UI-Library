/** @format */

import React from "react";
import Emoji from ".";

export default {
	title: "UI Component /Emoji",
	component: Emoji,
};

/* eslint-disable jsx-a11y/accessible-emoji */
export const Default = () => (
	<div>
		<Emoji label="smile">😊</Emoji>
		<Emoji label="good">👍</Emoji>
		<Emoji label="cry">🤣</Emoji>
	</div>
);
