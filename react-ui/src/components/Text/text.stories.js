import React from "react";
import Text from ".";

export default {
	title: "Typesetting/Text",
	component: Text,
};

export const Default = () => <Text>default text</Text>;

export const Secondary = () => <Text type="secondary"> secondary text</Text>;

export const Medium = () => <Text size="medium"> medium size text</Text>;

export const LargeBold = () => (
	<Text size="large" bold>
		large size bold text
	</Text>
);
