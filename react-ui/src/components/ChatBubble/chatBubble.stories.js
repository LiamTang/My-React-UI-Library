/** @format */

import VoiceMessage from "components/VoiceMessage";
/** @format */

import React from "react";
import ChatBubble from ".";

export default {
	title: "UI Component /ChatBubble",
	component: ChatBubble,
	decorators: [
		(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>,
	], //修改这个组件下 所有的样式都有一个内边距
};

export const FromOthers = () => (
	<ChatBubble time="yesterday 14:00">This message is from kevin</ChatBubble>
);

export const Mine = () => (
	<ChatBubble time="yesterday 13:00" type="mine">
		This message is from mine
	</ChatBubble>
);

export const VoiceMessageType = () => (
	<ChatBubble time="yesterday 13:00">
		<VoiceMessage time="13:04" />
	</ChatBubble>
);

export const VoiceMessageTypeMine = () => (
	<ChatBubble type="mine" time="yesterday 18:00">
		<VoiceMessage type="mine" time="18:04" />
	</ChatBubble>
);
