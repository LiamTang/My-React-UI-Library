/** @format */

import React from "react";
import Select from ".";
import Option from "components/Option";
export default {
	title: "UI Component/Input /Select",
	component: Select,
};

export const Default = () => (
	<Select>
		<Option>Option 1</Option>
		<Option>Option 2</Option>
	</Select>
);

export const FormSelect = () => {
	return (
		<Select type="form">
			<Option>Sydney</Option>
			<Option>Melbourne</Option>
		</Select>
	);
};
