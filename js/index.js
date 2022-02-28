document.addEventListener("DOMContentLoaded", () => {
	fetch(`${URLAPI}/discover/movie?api_key=${APIKEY}`)
		.then((res) => res.json())
		.then((res) => {
			CardComponent(res.results, "card-container");
		});
});
const navigateToDetail = (id) => {
	window.localStorage.setItem("ID_FILM", id);
	window.location.href = "detail.html";
};
