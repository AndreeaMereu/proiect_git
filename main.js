const myButton = document.getElementById("myButton");
const textButon = document.getElementById("text");
const KmCurmatura = document.getElementById("sumaKm");

myButton.addEventListener("click", function() {
   textButon.textContent = "Buna, numele meu este AKI!"
   KmCurmatura.textContent = "Km traseu Curmatura: " + km + " km";
});

const suma = (a,b) => a + b;
const totalKm = (a, b, funct) => funct (a, b);
const km = totalKm (10, 20, suma);