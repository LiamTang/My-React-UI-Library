/** @format */

import styled, { css } from "styled-components";

const Nav = styled.nav`
	flex-shrink: 0;

	position: relative;
	z-index: 100;
`;

const Sidebar = styled.aside`
	max-width: 448px;
	min-width: 344px;
	height: 100vh;
	flex: 1;
	background: ${({ theme }) => theme.gradientGrey};

	position: relative;
	z-index: 50;
	> div {
		will-change: transform, opacity;
		position: absolute;
		width: 100%;
	}
`;
const Content = styled.main`
	flex: 2;
	position: relative;
`;

const Drawer = styled.div`
	max-width: 310px;
	width: 0;

	transform: translateX(200px);
	transition: transform 0.4s;
	will-change: width, transform; //当width transform 改变时，告诉浏览器以提高性能

	${({ show }) =>
		show &&
		css`
			width: initial;
			transform: translateX(0px);
		`}
`;

const StyledChatApp = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	position: relative;
`;

export default StyledChatApp;
export { Nav, Sidebar, Content, Drawer };
