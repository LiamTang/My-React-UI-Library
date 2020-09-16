import React from "react";
import Paragraph from ".";

export default {
	title: "Typesetting/Paragraph",
	component: Paragraph,
};

export const Default = () => (
	<React.Fragment>
		<Paragraph>This is a paragraph</Paragraph>
		<Paragraph>This is a paragraph</Paragraph>
	</React.Fragment>
);

export const Ellipsis = () => (
	<React.Fragment>
		<Paragraph>
			This is a very long paragraph This is a very long paragraph This is
			a very long paragraph
		</Paragraph>
	</React.Fragment>
);
