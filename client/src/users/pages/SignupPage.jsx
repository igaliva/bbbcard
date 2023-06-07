import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../providers/UserProvider';
import ROUTES from './../../routes/routesModel';
import Container from '@mui/material/Container';
import useUsers from '../hooks/useUsers';
import initialSignupForm from '../helpers/initialForms/initialSignupForm';
import signupSchema from '../models/joi-schema/signupSchema';
import UserForm from '../components/UserForm';
import useForm from '../../forms/hooks/useForm';

const SignupPage = () => {
	const { handleSignup } = useUsers();
	const { value, ...rest } = useForm(
		initialSignupForm,
		signupSchema,
		handleSignup
	);
	const { user } = useUser();

	if (user) return <Navigate replace to={ROUTES.CARDS} />;

	return (
		<Container
			sx={{
				pt: 8,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<UserForm
				title="register user"
				onSubmit={rest.onSubmit}
				onReset={rest.handleReset}
				onFormChange={rest.validateForm}
				onInputChange={rest.handleChange}
				data={value.data}
				errors={value.errors}
				setData={rest.setData}
			/>
		</Container>
	);
};

export default SignupPage;
