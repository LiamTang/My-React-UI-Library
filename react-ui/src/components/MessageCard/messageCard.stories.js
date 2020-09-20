/** @format */

import React from "react";
import MessageCard from ".";
import face1 from "stories/assets/images/face-male-1.jpg";

export default {
	title: "UI Component/MessageCard",
	component: MessageCard,
};

export const Default = () => (
	<MessageCard
		avatarSrc={face1}
		name="Liam"
		avatarStatus="online"
		statusText="online"
		time="3hr ago"
		message="fighting fighting fighting"
		unreadCount={2}
	/>
);

export const Active = () => (
	<MessageCard
		avatarSrc={face1}
		name="Liam"
		avatarStatus="online"
		statusText="online"
		time="3hr ago"
		message="fighting fighting fighting"
		unreadCount={2}
		active
	/>
);

export const Replied = () => (
	<MessageCard
		avatarSrc={face1}
		name="Liam"
		avatarStatus="online"
		statusText="online"
		time="3hr ago"
		message="fighting fighting fighting"
		unreadCount={2}
		active
		replied
	/>
);

export const RepliedInactive = () => (
	<MessageCard
		avatarSrc={face1}
		name="Liam"
		avatarStatus="online"
		statusText="online"
		time="3hr ago"
		message="fighting fighting fighting"
		unreadCount={2}
		replied
	/>
);
