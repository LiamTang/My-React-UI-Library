/** @format */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "styled-components/macro";
import StyledVideoCall, {
	Action,
	Actions,
	Minimize,
	Self,
	VideoCallAlert,
} from "./style";
import videoCaller from "stories/assets/images/video-caller.jpg";
import face1 from "stories/assets/images/face-male-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCompressAlt,
	faMicrophone,
	faPhoneSlash,
	faVideo,
	faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";

function VideoCall({ children, ...rest }) {
	const [fullScreen, setFullScreen] = useState(true);

	if (!fullScreen) {
		return (
			<VideoCallAlert>
				<Avatar
					src={face1}
					css={`
						grid-area: avatar;
					`}
				/>
				<Paragraph
					size="medium"
					css={`
						grid-area: info;
					`}
				>
					Video Chatting with Kevin
				</Paragraph>
				<Paragraph
					type="secondary"
					css={`
						grid-area: action;
						cursor: pointer;
					`}
					onClick={() => setFullScreen(true)}
				>
					Full Screen
				</Paragraph>
				<FontAwesomeIcon
					icon={faVideo}
					css={`
						grid-area: icon;
						font-size: 20px;
						justify-self: end;
						opacity: 0.3;
					`}
				/>
			</VideoCallAlert>
		);
	}

	return (
		<StyledVideoCall src={videoCaller} {...rest}>
			<Minimize shape="rect" onClick={() => setFullScreen(false)}>
				<FontAwesomeIcon icon={faCompressAlt} />
			</Minimize>
			<Actions>
				<Action>
					<FontAwesomeIcon icon={faMicrophone} />
				</Action>
				<Action type="hangup">
					<FontAwesomeIcon icon={faPhoneSlash} />
				</Action>
				<Action>
					<FontAwesomeIcon icon={faVolumeMute} />
				</Action>
			</Actions>
			<Self src={face1} size="140px" />
		</StyledVideoCall>
	);
}

VideoCall.propTypes = {
	children: PropTypes.any,
};

export default VideoCall;
