const btnColor = document.getElementById("btnColor");
// console.log(btnColor);
// const color = document.getElementById("color");
const color = document.querygetElementById("color");
console.log(color);

//funcion color aleatorio
function colorHexRandom() {
  const valores = "0123456789ABCDEF";
  let colorA = "#";
  for (i = 0; i < 7; i++) {
    colorA += valores[Math.floor(Math.random() * valores.length)];
  }
  return colorA;
}
console.log(colorHexRandom());

//Event listener
btnColor.addEventListener("click", () => {
  let colorAleatorio = colorHexRandom();
  // console.log(colorAleatorio);
  // console.log(document);
  document.style.backgroundColor = colorAleatorio;
  color.innerHTML = colorAleatorio;
});
