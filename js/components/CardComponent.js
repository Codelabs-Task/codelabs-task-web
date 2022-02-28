const CardComponent = (data, container) => {
	const render = (data) => {
		element = `<card-component id="${data.id}" image="${data.poster_path}" title="${data.title}" year="${data.release_date}"></card-component>`;
		return element;
	};
	const setAll = () => {
		let element = "";
		data.map((el) => {
			element += render(el);
		});
		return element;
	};
	document.getElementById(container).innerHTML = setAll();
};
