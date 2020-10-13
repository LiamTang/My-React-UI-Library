/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from "./style";
import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import Conversation from "components/Conversation";
import Profile from "components/Profile";
import { Route, Switch } from "react-router-dom";
import ContactList from "components/ContactList";
import FileList from "components/FileList";
import NoteList from "components/NoteList";
import EditProfile from "components/EditProfile";
import Settings from "components/Settings";
import BlockList from "components/BlockList";
import VideoCall from "components/VideoCall";

function ChatApp({ children, ...rest }) {
	const [showDrawer, setShowDrawer] = useState(false);
	const [videoCalling, setVideoCalling] = useState(false);
	return (
		<StyledChatApp {...rest}>
			<Nav>
				<NavBar />
			</Nav>
			<Sidebar>
				<Switch>
					<Route exact path="/">
						<MessageList />
					</Route>
					<Route exact path="/contacts">
						<ContactList />
					</Route>
					<Route exact path="/files">
						<FileList />
					</Route>
					<Route exact path="/notes">
						<NoteList />
					</Route>
					<Route path="/settings">
						<EditProfile />
					</Route>
				</Switch>
			</Sidebar>
			<Content>
				{videoCalling && (
					<VideoCall onHangupClick={() => setVideoCalling(false)} />
				)}
				<Switch>
					<Route exact path="/settings">
						<Settings />
					</Route>
					<Route exact path="/settings/blocked">
						<BlockList />
					</Route>
					<Route path="/">
						<Conversation
							onAvatarClick={() => setShowDrawer(true)}
							onVideoClick={() => setVideoCalling(true)}
						/>
					</Route>
				</Switch>
			</Content>
			<Drawer show={showDrawer}>
				<Profile onCloseClick={() => setShowDrawer(false)} />
			</Drawer>
		</StyledChatApp>
	);
}

ChatApp.propTypes = {
	children: PropTypes.any,
};

export default ChatApp;
