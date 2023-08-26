const myButton = document.getElementById("myButton");
const imageContainer = document.getElementById("imageContainer");

myButton.addEventListener("click", function() {
    const newImage = document.createElement("img");
    newImage.src = "Aki2.jpeg";
    newImage.alt = "Aki";
    imageContainer.appendChild(newImage);
});