/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledBlockList, {
	ClosableAvatar,
	SettingsMenu,
	BlockedAvatar,
	CloseIcon,
	BlockedName,
	FriendList,
} from "./style";
import Icon from "components/Icon";
import { ReactComponent as ArrowMenuLeft } from "stories/assets/icons/arrowMenuLeft.svg";
import { ReactComponent as closeCircle } from "stories/assets/icons/closeCircle.svg";
import "styled-components/macro";
import Text from "components/Text";
import face1 from "stories/assets/images/face-male-1.jpg";
import { useHistory } from "react-router-dom";

function BlockList({ children, ...rest }) {
	const history = useHistory();

	return (
		<StyledBlockList {...rest}>
			<SettingsMenu>
				<Icon
					icon={ArrowMenuLeft}
					css={`
						cursor: pointer;
					`}
					onClick={() => history.goBack()}
				/>
				<Text size="xxlarge">Blocked Friends</Text>
			</SettingsMenu>
			<FriendList>
				{new Array(8).fill(0).map((_, i) => {
					return (
						<ClosableAvatar>
							<BlockedAvatar size="105px" src={face1} />
							<CloseIcon
								width={46}
								height={51}
								icon={closeCircle}
							/>
							<BlockedName>Sam</BlockedName>
						</ClosableAvatar>
					);
				})}
			</FriendList>
		</StyledBlockList>
	);
}

BlockList.propTypes = {
	children: PropTypes.any,
};

export default BlockList;
