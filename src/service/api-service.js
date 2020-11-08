import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: {
		"API-KEY": ""
	}
})

export const todosAPI = {
	getTodos() {
		return instance.get(`/todos?_limit=5`)
			.then(response => response.data)
	}
}
