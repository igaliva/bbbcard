import React from 'react';
import { func } from 'prop-types';
import MuiCard from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';
import cardType from './../../models/types/cardType';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';
import { useUser } from '../../../users/providers/UserProvider';

const Card = ({ card, onDelete, onLike }) => {
	const navigate = useNavigate();
	const { user } = useUser();
	return (
		<MuiCard sx={{ minWidth: 280 }}>
			<CardActionArea
				onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}>
				<CardHead image={card.image} />
				<CardBody card={card} />
			</CardActionArea>

			{user && (
				<CardActionBar
					userId={card.user_id}
					cardId={card._id}
					onDelete={onDelete}
					onLike={onLike}
				/>
			)}
		</MuiCard>
	);
};

Card.propTypes = {
	card: cardType.isRequired,
	onDelete: func.isRequired,
	onLike: func.isRequired,
};

export default Card;
