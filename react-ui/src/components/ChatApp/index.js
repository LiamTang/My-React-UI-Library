/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from "./style";
import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import Conversation from "components/Conversation";
import Profile from "components/Profile";
import { Route , Switch } from "react-router-dom";
import ContactList from "components/ContactList";
import FileList from "components/FileList";
import NoteList from "components/NoteList";
import EditProfile from "components/EditProfile";

function ChatApp({ children, ...rest }) {
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
				<Conversation />
			</Content>
			<Drawer>
				<Profile />
			</Drawer>
		</StyledChatApp>
	);
}

ChatApp.propTypes = {
	children: PropTypes.any,
};

export default ChatApp;
