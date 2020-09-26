/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEditProfile from "./style";
import Profile from "components/Profile";

function EditProfile({ children, ...rest }) {
	const [showEdit, setShowEdit] = useState(false);
	if (!showEdit) {
		return (
			<Profile
				onEdit={() => setShowEdit(true)}
				showEditBtn
				showCloseIcon={false}
			/>
		);
	}
	return <StyledEditProfile {...rest}>{children}</StyledEditProfile>;
}

EditProfile.propTypes = {
	children: PropTypes.any,
};

export default EditProfile;
