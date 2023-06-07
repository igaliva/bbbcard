import { useCallback, useState, useMemo } from 'react';
import { createCard, getCards, getMyCards } from './../services/cardApiService';
import useAxios from '../../hooks/useAxios';
import normalizeCard from '../helpers/normalization/normalizeCard';
import { useSnack } from '../../providers/SnackbarProvider';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

const useCards = () => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [cards, setCards] = useState();
	const [card, setCard] = useState();

	useAxios();
	const navigate = useNavigate();
	const snack = useSnack();

	const requestStatus = (loading, errorMessage, cards, card = null) => {
		setLoading(loading);
		setError(errorMessage);
		setCards(cards);
		setCard(card);
	};

	const handleGetCards = async () => {
		try {
			setLoading(true);
			const cards = await getCards();
			requestStatus(false, null, cards);
		} catch (error) {
			requestStatus(false, error, null);
		}
	};

	const handleGetMyCards = useCallback(async () => {
		try {
			setLoading(true);
			const cards = await getMyCards();
			requestStatus(false, null, cards);
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const handleCreateCard = useCallback(async (cardFromClient) => {
		try {
			setLoading(true);
			const normalizedCard = normalizeCard(cardFromClient);
			const card = await createCard(normalizedCard);
			requestStatus(false, null, null, card);
			snack('success', 'A new business card has been created');
			navigate(ROUTES.MY_CARDS);
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const value = useMemo(() => {
		return { card, cards, isLoading, error };
	}, [isLoading, card, cards, error]);

	return { value, handleGetCards, handleGetMyCards, handleCreateCard };
};

export default useCards;
