import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8181';

export const getCards = async () => {
	try {
		const { data } = await axios.get(`${apiUrl}/cards`);
		return Promise.resolve(data);
	} catch (error) {
		return Promise.reject(error.message);
	}
};

export const getMyCards = async () => {
	try {
		const { data } = await axios.get(`${apiUrl}/cards/my-cards`);
		return Promise.resolve(data);
	} catch (error) {
		return Promise.reject(error.message);
	}
};

export const createCard = async (normalizedCard) => {
	try {
		const { data } = await axios.get(`${apiUrl}/cards`, normalizedCard);
		return Promise.resolve(data);
	} catch (error) {
		return Promise.reject(error.message);
	}
};
