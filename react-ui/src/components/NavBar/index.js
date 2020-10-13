/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from "./style";
import Badge from "../Badge";
import Avatar from "../Avatar";
import profileImage from "stories/assets/images/face-male-1.jpg";
import {
	faCog,
	faCommentDots,
	faEllipsisH,
	faFolder,
	faStickyNote,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";
import { Link, matchPath, useLocation } from "react-router-dom";

function NavBar({ ...rest }) {
	return (
		<StyledNavBar {...rest}>
			<Avatar src={profileImage} status="online" />
			<MenuItems>
				<MenuItem to="/" showBadge icon={faCommentDots} />
				<MenuItem to="/contacts" icon={faUsers} />
				<MenuItem to="/files" icon={faFolder} />
				<MenuItem to="/notes" icon={faStickyNote} />
				<MenuItem icon={faEllipsisH} />
				<MenuItem
					to="/settings"
					icon={faCog}
					css={`
						align-self: end;
					`}
				/>
			</MenuItems>
		</StyledNavBar>
	);
}

function MenuItem({ to, icon, showBadge, ...rest }) {
	const loc = useLocation();
	// 如果当前的路径就是这个菜单项中的路径， 那就显示active， 两个！！转换成布尔类型
	const active = !!matchPath(loc.pathname, {
		path: to,
		exact: to === "/", 
	});
	return (
		<StyledMenuItem active={active} {...rest}>
			<Link to={to}>
				<Badge show={showBadge}>
					<MenuIcon active={active} icon={icon} />
				</Badge>
			</Link>
		</StyledMenuItem>
	);
}

NavBar.propTypes = {};

export default NavBar;
export { MenuItem };
