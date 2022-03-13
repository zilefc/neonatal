const Form = {
	motherSearchValue: document.querySelector('input#mother'),
	getMotherSearchValue() {
		return this.motherSearchValue.value;
	},
	setMothersList(value) {
		const mother = this.getMotherSearchValue();
		console.log(value);
		//console.log(mother);
	}
};
