/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Icon from "components/Icon";
import { ReactComponent as Plus } from "stories/assets/icons/plus.svg";
import Input from "components/Input";
import MessageCard from "components/MessageCard";
import face1 from "stories/assets/images/face-male-1.jpg";

function MessageList({ children, ...rest }) {
	return (
		<StyledMessageList {...rest}>
			<Input.Search />
			<ChatFilter />
			<ChatList>
				{[1, 2, 3, 4, 5, 6].map((_, index) => (
					<MessageCard
						key={index}
						active={index === 3}
						replied={index % 3 === 0}
						avatarSrc={face1}
						name="Liam"
						avatarStatus="online"
						statusText="online"
						time=" 3hr ago"
						message="hello this is liam, nice to meet you"
						unreadCount={2}
					/>
				))}
			</ChatList>
		</StyledMessageList>
	);
}

function ChatFilter() {
	return (
		<Filter style={{ padding: "20px 0" }}>
			<Filter.Filters label="Sort L;ist">
				<Select>
					<Option>Latest News</Option>
					<Option>Friends Online</Option>
				</Select>
			</Filter.Filters>

			<Filter.Action label="create a chat">
				<Button>
					<Icon icon={Plus} width={12} height={12} />
				</Button>
			</Filter.Action>
		</Filter>
	);
}

MessageList.propTypes = {
	children: PropTypes.any,
};

export default MessageList;
