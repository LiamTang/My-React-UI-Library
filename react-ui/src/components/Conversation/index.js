/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";

function Conversation({ onVideoClick, onAvatarClick, children, ...rest }) {
	return (
		<StyledConversation {...rest}>
			<TitleBar
				style={{ width: "100%" }}
				onAvatarClick={onAvatarClick}
				onVideoClick={onVideoClick}
			/>
			<Conversations>
				<ChatBubble time="yesterday 14:36">
					Hi Liam, what are you doing
				</ChatBubble>
				<MyChatBubble time="yesterday 14:42">
					Hi kevin, i am fixing bugs now
				</MyChatBubble>
				<ChatBubble time="yesterday 17:32">
					<VoiceMessage time="02:32" />
				</ChatBubble>
				<MyChatBubble time="yesterday 17:47">
					are you going to play league?
					<Emoji label="smile"></Emoji>
				</MyChatBubble>
			</Conversations>
			<Footer />
		</StyledConversation>
	);
}

Conversation.propTypes = {
	children: PropTypes.any,
};

export default Conversation;
