/** @format */
//отключаем submit если поле пустое//
function ctrlButton() {
	btn.disabled = this.value.trim().length === 0;
}

text1.addEventListener("input", ctrlButton, false);
ctrlButton.call(text1);

(function () {
	const form = document.getElementById("form");
	form.addEventListener("submit", event => {
		event.preventDefault();
		let obj = {};
		let input = event.target.querySelectorAll("input");
		input.forEach(item => {
			obj[item.name] = item.value;
		});

		event.target.reset();
		createElement(obj);

		text1.addEventListener("input", ctrlButton, false);
		ctrlButton.call(text1);
	});

	function createElement(elementData) {
		const div = document.createElement("div");
		div.classList.add("card");
		div.innerHTML = JSON.stringify(elementData);
		document.querySelector(".card-content").append(div);
	}
})();
