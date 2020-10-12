/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledNoteList, { Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";

function NoteList({ children, ...rest }) {
	return (
		<StyledNoteList {...rest}>
			<FilterList
				options={["latest notes", "recent change"]}
				actionLabel="add note"
			>
				<Notes>
					{new Array(10).fill(0).map((_, i) => (
						<NoteCard key={i} />
					))}
				</Notes>
			</FilterList>
		</StyledNoteList>
	);
}

NoteList.propTypes = {
	children: PropTypes.any,
};

export default NoteList;
