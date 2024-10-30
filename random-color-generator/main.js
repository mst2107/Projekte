// Wählt das Container-Element aus, in das die Farbcontainer eingefügt werden
const containerEl = document.querySelector(".container");

// Schleife, die 30 Farbcontainer-Elemente erstellt
for (let index = 0; index < 30; index++) {
    // Erstellt ein neues div-Element für den Farbcontainer
    const colorContainerEl = document.createElement("div");
    // Fügt die CSS-Klasse 'color-container' zum neuen Element hinzu
    colorContainerEl.classList.add("color-container");
    // Fügt den neuen Farbcontainer zum Hauptcontainer hinzu
    containerEl.appendChild(colorContainerEl);
}

// Wählt alle erstellten Farbcontainer-Elemente aus
const colorContainerEls = document.querySelectorAll(".color-container");

// Funktion, um Farben zu generieren und den Farbcontainern zuzuweisen
function generateColors () {
    // Iteriert über jeden Farbcontainer
    colorContainerEls.forEach((colorContainerEl) => {
        // Generiert einen neuen Farbcode
        const newColorCode = randomColor();
        // Setzt die Hintergrundfarbe des Farbcontainers auf den neuen Farbcode
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        // Setzt den Text des Farbcontainers auf den neuen Farbcode
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

// Ruft die Funktion auf, um die Farben zu generieren
generateColors();

// Funktion, um einen zufälligen Farbcode zu erzeugen
function randomColor() {
    // Definiert die Zeichen, die für den Farbcode verwendet werden
    const chars = "0123456789abcdef";
    // Definiert die Länge des Farbcodes (6 Zeichen für hexadezimale Farben)
    const colorCodeLength = 6;
    // Initialisiert einen leeren Farbcode
    let colorCode = "";

    // Schleife, die die gewünschte Anzahl an Zeichen für den Farbcode hinzufügt
    for (let index = 0; index < colorCodeLength; index++) {
        // Generiert eine zufällige Zahl innerhalb der Länge der Zeichen
        const randomNum = Math.floor(Math.random() * chars.length);
        // Fügt ein zufälliges Zeichen aus 'chars' zum Farbcode hinzu
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    // Gibt den generierten Farbcode zurück
    return colorCode;
}
