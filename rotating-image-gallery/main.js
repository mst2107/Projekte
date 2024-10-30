const imageContainerEl = document.querySelector(".image-container"); // Wählt das Element mit der Klasse "image-container"
const prevBtnEl = document.getElementById("prev"); // Holt das Element mit der ID "prev" (Vorheriger Button)
const nextBtnEl = document.getElementById("next"); // Holt das Element mit der ID "next" (Nächster Button)

let x = 0; // Initialer Rotationswinkel in Grad

let timer; // Variable zum Speichern des Timers, um ihn später zu löschen

prevBtnEl.addEventListener("click", () => {
    x = x + 45; // Erhöht den Winkel um 45 Grad, wenn der "prev"-Button geklickt wird
    clearTimeout(timer); // Löscht den bestehenden Timer, um eine Überlappung zu verhindern
    updateGallery(); // Führt die Update-Funktion aus, um die Galerie zu aktualisieren
});

nextBtnEl.addEventListener("click", () => {
    x = x - 45; // Verringert den Winkel um 45 Grad, wenn der "next"-Button geklickt wird
    clearTimeout(timer); // Löscht den bestehenden Timer, um eine Überlappung zu verhindern
    updateGallery(); // Führt die Update-Funktion aus, um die Galerie zu aktualisieren
});

function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`; // Setzt den 3D-Rotationswinkel basierend auf der aktuellen "x"-Wert
    timer = setTimeout(() => {
        x = x - 45; // Reduziert den Winkel nach 3 Sekunden um 45 Grad
        updateGallery(); // Ruft sich selbst rekursiv auf, um die Rotation fortzusetzen
    }, 3000); // Setzt eine Verzögerung von 3 Sekunden für den nächsten Aufruf
};

updateGallery(); // Initialer Aufruf, startet die Rotation sofort
