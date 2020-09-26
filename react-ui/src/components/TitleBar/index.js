/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";
import face from "stories/assets/images/face-male-2.jpg";
import { ReactComponent as Call } from "stories/assets/icons/call.svg";
import { ReactComponent as Camera } from "stories/assets/icons/camera.svg";
import { ReactComponent as Options } from "stories/assets/icons/options.svg";

function TitleBar({ children, ...rest }) {
	return (
		<StyledTitleBar {...rest}>
			<Avatar status="offline" src={face} />
			<Title>
				<Paragraph size="large"> Kevin Zheng</Paragraph>
				<Paragraph type="secondary">
					<Text> offline</Text>
					<Text> last online: 3hr ago</Text>
				</Paragraph>
			</Title>
			<Actions>
				<Icon opacity={0.3} icon={Call} />
				<Icon opacity={0.3} icon={Camera} />
				<Icon opacity={0.3} icon={Options} />
			</Actions>
		</StyledTitleBar>
	);
}

TitleBar.propTypes = {
	children: PropTypes.any,
};

export default TitleBar;