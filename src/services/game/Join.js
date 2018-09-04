import axios from 'axios';

const BASE_URL = 'http://localhost:3000/game/token=';

export default {
	join(token) {
		return axios.get(BASE_URL+token);
	}
}