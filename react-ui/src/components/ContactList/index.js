/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";

function ContactList({ children, ...rest }) {
	const trailAnimes = useStaggeredList(10);
	return (
		<StyledContactList {...rest}>
			<FilterList
				options={["new added", "name"]}
				actionLabel="add friend"
			>
				<Contacts>
					{new Array(10).fill(0).map((_, i) => (
						<animated.div key={i} style={trailAnimes[i]}>
							<ContactCard key={i} />
						</animated.div>
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
