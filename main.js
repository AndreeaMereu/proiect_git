const myButton = document.getElementById("myButton");
const textButon = document.getElementById("text");
const KmCurmatura = document.getElementById("sumaKm");
const premiu = document.getElementById("recompensa");

myButton.addEventListener("click", function() {
   textButon.textContent = "Buna, numele meu este AKI!"
   KmCurmatura.textContent = "Km traseu Curmatura: " + km + " km";
   premiu.textContent = "Recompensa mea bine meritata a fost o " + recompensaPrimita;
});
//arrow functions
const suma = (a,b) => a + b;
const totalKm = (a, b, funct) => funct (a, b);
const km = totalKm (10, 20, suma);

//destructurarea functiei
const variantaRecompensa = {
   recompensaA: "inghetata",
   recompensaB: "prajitura",
   recompensaC: "un os",
}
const { recompensaA, recompensaB, recompensaC} = variantaRecompensa;
const recompensaPrimita = recompensaA;

//array function filter
const myButton1 = document.getElementById("myButton1");
const distantaTraseu = document.getElementById("distanta");

myButton1.addEventListener("click", function() {
   distantaTraseu.textContent = "Cand ies la plimbare imi place sa parcurg: " + imiPlaceSaMerg + " km";
});

const kmDoriti = [ 2, 22, 31, 5];
const imiPlaceSaMerg = kmDoriti.filter((el) => el > 10);

