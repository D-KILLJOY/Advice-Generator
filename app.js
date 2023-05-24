const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const adviceGenerate = document.querySelector(".dice");

async function advice(slip_id) {
	const Response = await fetch(`https://api.adviceslip.com/advice/${slip_id}`);
	const Data = await Response.json();
	adviceId.textContent = Data.slip.id;
	adviceText.textContent = Data.slip.advice;
}

advice(Math.floor(Math.random() * 224));
adviceGenerate.addEventListener("click", () => {
	const num = Math.floor(Math.random() * 224);

	advice(num);
});
