/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledPopover, { Content, Target, Triangle } from "./style";

function Popover({
	children,
	content,
	onVisible,
	onHide, //onHide 和 onVisible 分别代表隐藏或者显示后 要做的函数回调
	offset = {},
	...rest
}) {
	const [visible, setVisible] = useState(false);

	const handleClick = () => {
		if (visible) {
			setVisible(false);
			onHide && onHide();
		} else {
			setVisible(true);
			onVisible && onVisible();
		}
	};

	return (
		<StyledPopover {...rest} onClick={handleClick}>
			<Content visible={visible} offset={offset}>
				{content}
			</Content>
			<Triangle visible={visible} offset={offset} />
			<Target>{children}</Target>
		</StyledPopover>
	);
}

Popover.propTypes = {
	children: PropTypes.any,
	content: PropTypes.any,
	offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
	onVisible: PropTypes.func,
	onHide: PropTypes.func,
};

export default Popover;
