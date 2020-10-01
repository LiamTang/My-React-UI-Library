/** @format */

import React from "react";
import Settings, { SettingsItem } from ".";

export default {
	title: "Page Component/Settings",
	component: Settings,
};

export const Default = () => <Settings />;

export const WithoutDescription = () => (
	<SettingsItem label="this is a setting without description" />
);

export const WithDescription = () => (
	<SettingsItem
		label="this is a setting with description"
		description="test test 123"
	/>
);

export const WithMenu = () => (
	<SettingsItem label="this is a setting with sub-menu" type="menu" />
);
