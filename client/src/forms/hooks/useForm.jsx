import React from 'react';
import PropTypes, { func, object } from 'prop-types';

const useForm = (initialForm, schema, handleSubmit) => {
	return <div>useForm</div>;
};

useForm.propTypes = {
	initialForm: object.isRequired,
	schema: object.isRequired,
	handleSubmit: func.isRequired,
};

export default useForm;
