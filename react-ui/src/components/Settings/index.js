/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledSettings, {
	SettingsItemControl,
	StyledSettingsGroup,
	StyledSettingsItem,
} from "./style";
import Paragraph from "components/Paragraph";
import Switch from "components/Switch";
import Icon from "components/Icon";
import { ReactComponent as ArrowMenuRight } from "stories/assets/icons/arrowMenuRight.svg";
import Seperate from "components/Seperate";
import "styled-components/macro";
import { Link } from "react-router-dom";

function Settings({ children, ...rest }) {
	return (
		<StyledSettings {...rest}>
			<SettingsGroup groupName="Privacy Settings">
				<SettingsItem label="Validate when adding a new friend" />
				<SettingsItem
					label="Recommend friends from your contact"
					description="test test 123"
				/>
				<SettingsItem label="Find me only by the mobile number" />
			</SettingsGroup>

			<SettingsGroup groupName="Notification Settings">
				<SettingsItem label="New message" />
				<SettingsItem label="Voice message" />
				<SettingsItem label="Video message" />
				<SettingsItem label="Voice" />
				<Link
					to={`/settings/blocked`}
					css={`
						text-decoration: none;
						color: inherit;
					`}
				>
					<SettingsItem
						label="Check blocked friends in the list"
						type="menu"
					/>
				</Link>
			</SettingsGroup>
		</StyledSettings>
	);
}

function SettingsGroup({ groupName, children, ...rest }) {
	return (
		<StyledSettingsGroup>
			<Paragraph size="xxlarge" style={{ paddingBottom: "24px" }}>
				{groupName}
			</Paragraph>
			{children}
		</StyledSettingsGroup>
	);
}

export function SettingsItem({
	type = "switch",
	label,
	description,
	children,
	...rest
}) {
	return (
		<StyledSettingsItem {...rest}>
			<SettingsItemControl>
				<Paragraph size="large">{label}</Paragraph>
				{type === "switch" && <Switch />}
				{type === "menu" && <Icon icon={ArrowMenuRight} />}
			</SettingsItemControl>

			{description && (
				<Paragraph type="secondary" style={{ margin: "4px 0" }}>
					{description}
				</Paragraph>
			)}

			<Seperate style={{ marginTop: "8px", marginBottom: "20px" }} />
		</StyledSettingsItem>
	);
}

Settings.propTypes = {
	children: PropTypes.any,
	type: PropTypes.string,
	label: PropTypes.string,
	description: PropTypes.string,
};

export default Settings;
