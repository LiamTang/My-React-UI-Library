/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledFooter, { IconContainer, StyledPopoverContent } from "./style";
import Input from "components/Input";
import Icon from "components/Icon";

import { ReactComponent as ClipIcon } from "stories/assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "stories/assets/icons/smile.svg";
import { ReactComponent as MicrophoneIcon } from "stories/assets/icons/microphone.svg";
import { ReactComponent as PlaneIcon } from "stories/assets/icons/plane.svg";
import { ReactComponent as OptionsIcon } from "stories/assets/icons/options.svg";
import Button from "components/Button";
import Emoji from "components/Emoji";
import Popover from "components/Popover";
import { useTheme } from "styled-components";

function Footer({ animeProps, style, children, ...rest }) {
	const [emojiIconActive, setEmojiIconActive] = useState(false);
	const theme = useTheme();

	return (
		<StyledFooter style={{ ...style, ...animeProps }} {...rest}>
			<Input
				placeholder="please enter something"
				suffix={
					<IconContainer>
						<Popover
							content={<PopoverContent />}
							offset={{ x: "-25%" }}
							onVisible={() => setEmojiIconActive(true)}
							onHide={() => setEmojiIconActive(false)}
						>
							<Icon
								icon={SmileIcon}
								color={
									emojiIconActive ? undefined : theme.grey3
								}
							/>
						</Popover>
						<Icon icon={MicrophoneIcon} />
						<Button size="52px">
							<Icon
								icon={PlaneIcon}
								color="white"
								style={{ transform: "translateX(-2px)" }}
							/>
						</Button>
					</IconContainer>
				}
				prefix={<Icon icon={ClipIcon} />}
			/>
		</StyledFooter>
	);
}

/* eslint-disable jsx-a11y/accessible-emoji */
function PopoverContent(props) {
	return (
		<StyledPopoverContent>
			<Emoji label="smile">😊</Emoji>
			<Emoji label="grinning">😁</Emoji>
			<Emoji label="thumbup">👍</Emoji>
			<Emoji label="heart">💖</Emoji>
			<Emoji label="love">😍</Emoji>
			<Emoji label="sad">😒</Emoji>
			<Emoji label="ok">👌</Emoji>
			<Emoji label="cry">🤣</Emoji>
			<Icon icon={OptionsIcon} style={{ marginLeft: "24px" }} />
		</StyledPopoverContent>
	);
}

Footer.propTypes = {
	children: PropTypes.any,
};

export default Footer;
