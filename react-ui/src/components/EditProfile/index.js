/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEditProfile, {
	GenderAndRegion,
	GroupTitle,
	SelectGroup,
	StyledIconInput,
} from "./style";
import Profile from "components/Profile";
import Avatar from "components/Avatar";
import face1 from "stories/assets/images/face-male-1.jpg";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";
import InputText from "components/Input/InputText";
import Radio from "components/Radio";
import LabelContainer from "components/LabelContainer";
import Select from "components/Select";
import Option from "components/Option";
import Icon from "components/Icon";
import {
	faGithub,
	faLinkedin,
	faWeibo,
} from "@fortawesome/free-brands-svg-icons";

function EditProfile({ children, ...rest }) {
	const [showEdit, setShowEdit] = useState(false);
	if (!showEdit) {
		return (
			<Profile
				onEdit={() => setShowEdit(true)}
				showEditBtn
				showCloseIcon={false}
			/>
		);
	}
	return (
		<StyledEditProfile {...rest}>
			<Avatar
				src={face1}
				size="160px"
				css={`
					grid-area: 1/1/2/2;
					justify-self: center;
					margin-bottom: 12px;
				`}
			/>
			<Button
				size="52px"
				css={`
					grid-area: 1/1/3/2;
					z-index: 10;
					align-self: end;
					justify-self: end;
				`}
			>
				<FontAwesomeIcon
					icon={faCheck}
					onClick={() => setShowEdit(false)}
				/>
			</Button>
			<GroupTitle>Basic Information</GroupTitle>
			<InputText label="username" />
			<GenderAndRegion>
				<Radio.Group label="gender">
					<Radio name="gender"> male </Radio>
					<Radio name="gender"> female </Radio>
				</Radio.Group>
				<LabelContainer label="region">
					<SelectGroup>
						<Select type="form">
							<Option> state </Option>
						</Select>
						<Select type="form">
							<Option> city </Option>
						</Select>
						<Select type="form">
							<Option> suburb </Option>
						</Select>
					</SelectGroup>
				</LabelContainer>
			</GenderAndRegion>
			<InputText label="signature" />

			<GroupTitle>Contact Information</GroupTitle>
			<InputText label="mobile" />
			<InputText label="email" />
			<InputText label="website" />

			<GroupTitle>Social Information</GroupTitle>
			<IconInput icon={faWeibo} bgColor="#f06767" />
			<IconInput icon={faGithub} bgColor="black" />
			<IconInput icon={faLinkedin} bgColor="#2483c0" />
		</StyledEditProfile>
	);
}

function IconInput({ icon, bgColor, ...rest }) {
	return (
		<StyledIconInput>
			<Icon.Social icon={icon} bgColor={bgColor} />
			<InputText {...rest} />
		</StyledIconInput>
	);
}

EditProfile.propTypes = {
	children: PropTypes.any,
};

export default EditProfile;
