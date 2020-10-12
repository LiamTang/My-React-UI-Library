/** @format */

import Icon from "components/Icon";
import Paragraph from "components/Paragraph";
import Seperate from "components/Seperate";
import React, { Fragment } from "react";
import Dropdown from ".";
import { DropdownItem } from "./style";

import { ReactComponent as Options } from "stories/assets/icons/options.svg";

export default {
	title: "UI Component/Dropdown",
	component: Dropdown,
};

const dropdownContent = (
	<Fragment>
		<DropdownItem>
			<Paragraph> Personal Portfolio</Paragraph>
		</DropdownItem>
		<DropdownItem>
			<Paragraph> Close Conversation</Paragraph>
		</DropdownItem>
		<Seperate />
		<DropdownItem>
			<Paragraph type="danger">Block Him</Paragraph>
		</DropdownItem>
	</Fragment>
);

export const Default = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "space-between",
			width: "50%",
		}}
	>
		<Paragraph>Click the right button</Paragraph>
		<Dropdown content={dropdownContent}>
			<Icon opacity={0.3} icon={Options} />
		</Dropdown>
	</div>
);

export const Left = () => (
	<div>
		<Paragraph> click the bottom button</Paragraph>
		<Dropdown align="left" content={dropdownContent}>
			<Icon opacity={0.3} icon={Options} />
		</Dropdown>
	</div>
);
