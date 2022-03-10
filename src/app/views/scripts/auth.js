const Storage = {
	getUserData() {
		const user = JSON.parse(localStorage.getItem('neonatal:user'));
		return user;
	},
	clearUserData() {
		localStorage.removeItem('neonatal:user');
	}
};

const App = {
	init() {
		const { user = {}, exp = '' } = Storage.getUserData();

		if (user && exp) {
			const parsedExp = new Date(exp);

			if (parsedExp < new Date()) {
				Storage.clearUserData();
				location.assign('http://localhost:3333/sessions');
			}
		} else {
			Storage.clearUserData();
			location.assign('http://localhost:3333/sessions');
		}
	}
};

App.init();
