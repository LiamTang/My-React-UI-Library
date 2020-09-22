/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledChatBubble, {
	Time,
	BubbleTip,
	Bubble,
	MessageText,
} from "./style";
import { ReactComponent as BubbleTipIcon } from "stories/assets/icons/bubbleTip.svg";

function ChatBubble({ children, type, time, ...rest }) {
	return (
		<StyledChatBubble type={type} {...rest}>
			<Bubble>
				<BubbleTip
					icon={BubbleTipIcon}
					width={40}
					height={25}
					color="white"
				/>
				<MessageText>{children}</MessageText>
			</Bubble>
			<Time>{time}</Time>
		</StyledChatBubble>
	);
}

ChatBubble.propTypes = {
	children: PropTypes.any,
	type: PropTypes.oneOf(["mine"]),
	time: PropTypes.string,
};

export default ChatBubble;
