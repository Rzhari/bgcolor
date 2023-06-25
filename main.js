const body = document.body;
const title = document.getElementsByClassName('title')[0];
console.log(title);


function merah() {
	body.style.backgroundColor = "#FF2A31";
	title.style.color = "#000";
}

function hijau() {
	body.style.backgroundColor = "#25BD00";
	title.style.color = "#000";
}

function biru() {
	body.style.backgroundColor = "#009FFF";
	title.style.color = "#000";
}

function hitam() {
	body.style.backgroundColor = "#252525";
	title.style.color = "#fff";
}

function reset() {
	body.style.backgroundColor = "#fff";
	title.style.color = "#000";
}