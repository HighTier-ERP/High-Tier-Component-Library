//PACKAGE IMPORTS
import React from 'react';
import PropTypes from 'prop-types';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//User profile images. Guarded by auth 0 hook
/*----------------------------------------------------------------------------*/
const Avatar = ({ profilePicture }) => {
	return (
		<span>
			<img
				alt="User Profile"
				className="box-shadow"
				src={profilePicture}
			/>
		</span>
	);
};

Avatar.propTypes = {
	profilePicture: PropTypes.string
};

export default Avatar;
