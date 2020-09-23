/** @format */

import Icon from "components/Icon";
import React from "react";
import Input from ".";

export default {
	title: "UI Component/Input",
	component: Input,
};

export const Default = () => <Input />;

export const Search = () => <Input.Search />;

export const InputWithLabel = () => <Input.Text label="nickname" />;

export const InputWithoutLabel = () => <Input.Text />;
