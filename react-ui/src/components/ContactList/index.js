/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";

function ContactList({ children, ...rest }) {
	return (
		<StyledContactList {...rest}>
			<FilterList
				options={["new added", "name"]}
				actionLabel="add friend"
			>
				<Contacts>
					{new Array(10).fill(0).map((_, i) => (
						<ContactCard key={i} />
					))}
				</Contacts>
			</FilterList>
		</StyledContactList>
	);
}

ContactList.propTypes = {
	children: PropTypes.any,
};

export default ContactList;
