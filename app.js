const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const adviceGenerate = document.querySelector(".dice");

async function advice() {
	const Response = await fetch("https://api.adviceslip.com/advice");

	const Data = await Response.json();

	adviceId.textContent = Data.slip.id;
	adviceText.textContent = Data.slip.advice;
}

advice();
adviceGenerate.addEventListener("click", advice);
