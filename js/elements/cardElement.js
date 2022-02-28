class CardElement extends HTMLElement {
	connectedCallback() {
		const id = this.attributes.id.value;
		const image = this.attributes.image.value;
		const title = this.attributes.title.value;
		const year = this.attributes.year.value;
		this.innerHTML = `<div class="m-1 cursor-pointer" onclick="navigateToDetail(${id})">
                         <div class="border-radius-pill shadow inline-block">
                              <div class="">
                                   <img src="https://image.tmdb.org/t/p/w500/${image}" class="w-small-image border-radius-pill-top" alt="">
                              </div>
                              <div class="border-radius-pill-bottom py-1 px-1">
                                   <h3>${
								title.length > 18
									? title.slice(0, 18) + "..."
									: title
							}</h3>  (${new Date(
			year
		).getFullYear()})</h5>
          
                              </div>
                         </div>
                    </div>`;
	}
}
customElements.define("card-component", CardElement);
