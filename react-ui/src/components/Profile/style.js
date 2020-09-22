/** @format */

import styled from "styled-components";
import arrowRight from "stories/assets/icons/arrowRight.svg";
import Icon from "components/Icon";

const SocialLinks = styled.div`
	& > * {
		margin: 0 9px;
	}
`;

const ContactSection = styled.div`
	display: grid;
	row-gap: 18px;
`;

const AlbumSection = styled.section``;

const AlbumTitle = styled.div`
	justify-self: stretch; /** 自动沾满整个profile grid的宽度 */
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > a {
		text-decoration: none;
		font-size: ${({ theme }) => theme.normal};
		color: ${({ theme }) => theme.primaryColor};
		&::after {
			display: inline-block;
			content: url(${arrowRight});
			margin-left: 2px;
		}
	}
`;

const Photo = styled.img`
	width: 76px;
	height: 76px;
	object-fit: cover; /** 自动缩放，占满容器*/
`;

const Album = styled.div`
	margin-top: 14px;
	justify-self: start;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr); /** 每行显示三列， 平分空间*/
	gap: 10px;
`;

const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
	position: absolute;
	right: 30px;
	top: 30px;
	cursor: pointer;
`;

const StyledProfile = styled.div`
	display: grid;
	align-content: start;
	justify-content: center;
	justify-items: center;
	position: relative;
	padding: 30px;
	height: 100vh;
	margin-top: 2vh;
	overflow-y: auto;
`;

export default StyledProfile;
export {
	SocialLinks,
	ContactSection,
	AlbumSection,
	AlbumTitle,
	Album,
	Photo,
	CloseIcon,
};
