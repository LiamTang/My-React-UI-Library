import React from "react";
import Heading from ".";

export default {
	title: "Typesetting/ Heading",
	component: Heading,
};

export const H1 = () => <Heading level={1}>This is Heading</Heading>;

export const H2 = () => <Heading level={2}>This is Heading</Heading>;

export const H3 = () => <Heading level={3}>This is Heading</Heading>;

export const H4 = () => <Heading level={4}>This is Heading</Heading>;

export const H5 = () => <Heading level={5}>This is Heading</Heading>;

export const H6 = () => <Heading level={6}>This is Heading</Heading>;
