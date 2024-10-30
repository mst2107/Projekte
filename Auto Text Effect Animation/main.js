// Selektiere das HTML-Element mit der Klasse "container" und speichere es in der Variable 'containerEl'
const containerEl = document.querySelector(".container");

// Definiere ein Array von Karrieren
const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];

// Initialisiere die Indizes für die Karriere und den Zeichen
let careerIndex = 0;
let characterIndex = 0;

// Funktion, um den Text in der Container-Element zu aktualisieren
function updateText() {
    // Erhöhe den characterIndex um 1
    characterIndex++;
    
    // Setze den HTML-Inhalt des Container-Elements
    containerEl.innerHTML = `<h1> I am  
                                ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} 
                                ${careers[careerIndex].slice(0, characterIndex)}
                            </h1>`;
    
    // Wenn der characterIndex gleich der Länge der aktuellen Karriere ist
    if (characterIndex === careers[careerIndex].length) {
        // Gehe zur nächsten Karriere
        careerIndex++;
        // Setze den characterIndex zurück auf 0
        characterIndex = 0;
    }

    // Wenn der careerIndex gleich der Anzahl der Karrieren ist
    if (careerIndex === careers.length) {
        // Setze den careerIndex zurück auf 0, um wieder bei der ersten Karriere zu beginnen
        careerIndex = 0;
    }
    
    // Rufe die updateText-Funktion nach 400 Millisekunden erneut auf
    setTimeout(updateText, 400);
}

// Starte den Text-Update-Prozess
updateText();
