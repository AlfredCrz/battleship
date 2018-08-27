import axios from 'axios';

const BASE_URL = 'http://localhost:3000/game';

export default {
	create(sizeBoard) {
		return axios.post(BASE_URL, sizeBoard);
	}
}