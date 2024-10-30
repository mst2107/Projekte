const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

let imageNum = 8;

btnEl.addEventListener("click", () => {
    addNewImages();
});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainerEl.appendChild(newImgEl)
    }
}


                            // Chat-Gpt
                            
// const imageContainerEl = document.querySelector(".image-container");
// const btnEl = document.querySelector(".btn");
// const imageCountEl = document.getElementById("image-count");

// btnEl.addEventListener("click", () => {
//     // Anzahl der Bilder aus dem Eingabefeld holen
//     let imageNum = parseInt(imageCountEl.value);
    
//     // Überprüfen, ob die Eingabe gültig ist
//     if (isNaN(imageNum) || imageNum <= 0) {
//         alert("Bitte eine gültige Anzahl an Bildern eingeben!");
//         return;
//     }
    
//     // Bilder hinzufügen
//     addNewImages(imageNum);
// });

// function addNewImages(imageNum) {
//     // Bilder-Container leeren, bevor neue Bilder hinzugefügt werden
//     imageContainerEl.innerHTML = "";
    
//     for (let index = 0; index < imageNum; index++) {
//         const newImgEl = document.createElement("img");
//         newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
//         imageContainerEl.appendChild(newImgEl);
//     }
// }
