const Storage = {
	setUserData(data) {
		localStorage.setItem('neonatal:user', JSON.stringify(data));
	}
};

const Form = {
	email: document.querySelector('#user-email'),
	password: document.querySelector('#user-password'),
	getValues() {
		return {
			email: this.email.value,
			password: this.password.value
		};
	},

	submit(event) {
		event.preventDefault();
		const { email, password } = this.getValues();
		Request.postData({ email, password }, '/sessions')
			.then((data) => {
				console.log(data);
				Storage.setUserData(data);

				Request.getPage('/');
			})
			.catch((error) => {
				console.log(error);
				alert('Falha ao entrar!');
			});
	}
};

const Request = {
	async postData(data, route) {
		const url = `http://localhost:3333${route}`;
		const params = {
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
			method: 'POST'
		};

		const response = await fetch(url, params);
		return response.json();
	},

	async getPage(route) {
		const url = `http://localhost:3333${route}`;
		const params = {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'GET',
			redirect: 'follow'
		};

		fetch(url, params).then((result) =>
			window.location.assign(`http://localhost:3333${route}`)
		);
	}
};
