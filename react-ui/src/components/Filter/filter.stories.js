/** @format */

import Icon from "components/Icon";
import Option from "components/Option";
import Select from "components/Select";
import { ReactComponent as Plus } from "stories/assets/icons/plus.svg";
/** @format */

import React from "react";
import Button from "components/Button";
import Filter from ".";

export default {
	title: "UI Component /Filter",
	component: Filter,
};

export const Default = () => (
	<Filter>
		<Filter.Filters label="sort by">
			<Select>
				<Option>latest news</Option>
				<Option>friends online</Option>
			</Select>
		</Filter.Filters>

		<Filter.Action label="create a chat">
			<Button>
				<Icon icon={Plus} width={12} height={12} />
			</Button>
		</Filter.Action>
	</Filter>
);
