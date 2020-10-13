/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";

import MessageCard from "components/MessageCard";
import face1 from "stories/assets/images/face-male-1.jpg";
import {} from "@fortawesome/free-solid-svg-icons";
import FilterList from "components/FilterList";
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";
import messageData from "data/message";

function MessageList({ children, ...rest }) {
	const trailAnimes = useStaggeredList(6);
	return (
		<StyledMessageList {...rest}>
			<FilterList
				options={["latest news", "online friends"]}
				actionLabel="create a chat"
			>
				<ChatList>
					{messageData.map((message, index) => (
						<animated.div
							key={message.id}
							style={trailAnimes[index]}
						>
							<MessageCard
								key={message.id}
								active={index === 3}
								replied={message.replied}
								avatarSrc={message.avatarSrc}
								name={message.name}
								avatarStatus={message.status}
								statusText={message.statusText}
								time={message.time}
								message={message.message}
								unreadCount={message.unreadCount}
							/>
						</animated.div>
					))}
				</ChatList>
			</FilterList>
		</StyledMessageList>
	);
}

MessageList.propTypes = {
	children: PropTypes.any,
};

export default MessageList;
