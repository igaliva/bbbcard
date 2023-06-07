import React from 'react';
import PropTypes from 'prop-types';
import { useUser } from '../../users/providers/UserProvider';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

const FavCardsPage = (props) => {
	const { user } = useUser();
	if (!user) return <Navigate replace to={ROUTES.CARDS} />;
	return <div>FavCardsPage</div>;
};

FavCardsPage.propTypes = {};

export default FavCardsPage;
