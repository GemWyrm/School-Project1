const str = document.getElementById("str");
const strOutput = document.getElementById("strOutput");
str.addEventListener('input', letter => {
	strOutput.textContent = Math.floor((letter.target.value - 10) / 2)
});
const dex = document.getElementById("dex");
const dexOutput = document.getElementById("dexOutput");
dex.addEventListener('input', letter => {
	dexOutput.textContent = Math.floor((letter.target.value - 10) / 2)
});
const con = document.getElementById("con");
const conOutput = document.getElementById("conOutput");
con.addEventListener('input', letter => {
	conOutput.textContent = Math.floor((letter.target.value - 10) / 2)
});
const int = document.getElementById("int");
const intOutput = document.getElementById("intOutput");
int.addEventListener('input', letter => {
	intOutput.textContent = Math.floor((letter.target.value - 10) / 2)
});
const wis = document.getElementById("wis");
const wisOutput = document.getElementById("wisOutput");
wis.addEventListener('input', letter => {
	wisOutput.textContent = Math.floor((letter.target.value - 10) / 2)
});
const cha = document.getElementById("cha");
const chaOutput = document.getElementById("chaOutput");
cha.addEventListener('input', letter => {
	chaOutput.textContent = Math.floor((letter.target.value - 10) / 2)
});

//const btnInput = document.getElementById("btn");//THis is for saving to local storage