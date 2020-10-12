/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledNoteCard, {
	NoteExcerpt,
	NoteImage,
	NotePublishTime,
	NoteTitle,
} from "./style";
import note1 from "stories/assets/images/note-1.jpg";

function NoteCard({ children, ...rest }) {
	return (
		<StyledNoteCard {...rest}>
			<NoteImage src={note1} />
			<NoteTitle>This is note title</NoteTitle>
			<NoteExcerpt>This is note excerpt</NoteExcerpt>
			<NotePublishTime>08-AUG-2020</NotePublishTime>
		</StyledNoteCard>
	);
}

NoteCard.propTypes = {
	children: PropTypes.any,
};

export default NoteCard;
