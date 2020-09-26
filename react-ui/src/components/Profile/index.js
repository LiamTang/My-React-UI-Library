/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledProfile, {
	SocialLinks,
	ContactSection,
	AlbumSection,
	AlbumTitle,
	Album,
	Photo,
	CloseIcon,
} from "./style";
import "styled-components/macro";
import Avatar from "components/Avatar";

import face1 from "stories/assets/images/face-male-1.jpg";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";
import {
	faWeibo,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Seperate from "components/Seperate";
import Text from "components/Text";

import photo1 from "stories/assets/images/photo1.jpg";
import photo2 from "stories/assets/images/photo2.jpg";
import photo3 from "stories/assets/images/photo3.jpg";
import { ReactComponent as Cross } from "stories/assets/icons/cross.svg";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Profile({
	children,
	showEditBtn,
	showCloseIcon = true,
	onEdit,
	status,
	...rest
}) {
	return (
		<StyledProfile {...rest}>
			{showCloseIcon && <CloseIcon icon={Cross} />}
			<Avatar
				css={`
					margin: 26px 0;
					grid-area: 1/1/3/2;
				`}
				src={face1}
				size="160px"
				status={status}
				statusIconSize="25px"
			/>
			{showEditBtn && (
				<Button
					size="52px"
					onClick={onEdit}
					css={`
						grid-area: 1/1/3/2;
						align-self: end;
						margin-left: 100px;
						z-index: 10;
					`}
				>
					<FontAwesomeIcon
						css={`
							font-size: 24px;
						`}
						icon={faPen}
					/>
				</Button>
			)}
			<Paragraph
				size="xlarge"
				css={`
					margin-bottom: 12px;
				`}
			>
				Liam Tang
			</Paragraph>
			<Paragraph
				size="medium"
				type="secondary"
				css={`
					margin-bottom: 18px;
				`}
			>
				NSW Sydney
			</Paragraph>
			<Paragraph
				size="medium"
				css={`
					margin-bottom: 26px;
				`}
			>
				A full stack developer
				<Emoji label="cool">😎</Emoji>
			</Paragraph>
			<SocialLinks>
				<Icon.Social
					icon={faWeibo}
					bgColor="#f06767"
					href="http://www.weibo.com"
				/>
				<Icon.Social icon={faGithub} bgColor="black" />
				<Icon.Social icon={faLinkedin} bgColor="#2483c0" />
			</SocialLinks>
			<Seperate
				css={`
					margin: 30px 0;
				`}
			/>
			<ContactSection>
				<Description label="mobile"> +61 0400 000 000</Description>
				<Description label="email"> test@gmail.com</Description>
				<Description label="website">
					https://person.portfolio.com
				</Description>
			</ContactSection>
			<Seperate
				css={`
					margin: 30px 0;
				`}
			/>
			<AlbumSection>
				<AlbumTitle>
					<Text type="secondary"> Album (21)</Text>
					<a> view more</a>
				</AlbumTitle>
				<Album>
					<Photo src={photo1} alt="" />
					<Photo src={photo2} alt="" />
					<Photo src={photo3} alt="" />
				</Album>
			</AlbumSection>
		</StyledProfile>
	);
}

function Description({ label, children }) {
	return (
		<Paragraph>
			<Text type="secondary">{label}</Text>
			<Text>{children}</Text>
		</Paragraph>
	);
}

Profile.propTypes = {
	children: PropTypes.any,
};

export default Profile;
