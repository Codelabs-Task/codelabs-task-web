const CardComponent = (data, container) => {
	const render = (data) => {
		element = `
          <div class="m-1 cursor-pointer" onclick="navigateToDetail(${
			data.id
		})">
                         <div class="border-radius-pill shadow inline-block">
                              <div class="">
                                   <img src="https://image.tmdb.org/t/p/w500/${
								data.poster_path
							}" class="w-small-image border-radius-pill-top" alt="">
                              </div>
                              <div class="border-radius-pill-bottom py-1 px-1">
                                   <h3>${
								data.title.length > 18
									? data.title.slice(0, 18) + "..."
									: data.title
							}</h3>  (${new Date(
			data.release_date
		).getFullYear()})</h5>
                                   <h5>${data.category}</h5>
          
                              </div>
                         </div>
                    </div>`;
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
