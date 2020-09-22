/** @format */

import React from "react";
import Button from ".";
import Icon from "components/Icon";
import { ReactComponent as Plus } from "stories/assets/icons/plus.svg";

export default {
	title: "UI Component /Button",
	component: Button,
};

export const ReactButton = () => <Button shape="rect">Default</Button>;

export const ReactRedButton = () => (
	<Button shape="rect" bgColor="red">
		Default
	</Button>
);

export const CircleButton = () => (
	<Button>
		<Icon icon={Plus} width={12} height={12} />
	</Button>
);
