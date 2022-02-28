class NavElement extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<div class="bg-primary px-3 py-2 ">
          <nav class=" flex justify-between">
               <div>
                    <h1 class="text-white">Movies Website </h1>
               </div>
               <div class="flex justify-between text-white">
                    <h5 class="mx-2">Home</h5>
                    <h5 class="mx-2">Categories</h5>
                    <h5 class="mx-2">About</h5>
               </div>
          </nav>
     </div>`;
	}
}
customElements.define("nav-component", NavElement);
