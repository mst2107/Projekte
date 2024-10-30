// "use strict"; // Aktiviert den Strict Mode, der strengere Fehlerüberprüfungen in JavaScript erzwingt

// Wählt das Container-Element aus, das beide Spalten enthält
const containerEl = document.querySelector(".container");
// Wählt das linke Spalten-Element aus
const leftEl = document.querySelector(".left");
// Wählt das rechte Spalten-Element aus
const rightEl = document.querySelector(".right");

// Fügt einen Ereignis-Listener für das 'mouseenter'-Ereignis auf dem linken Element hinzu
leftEl.addEventListener("mouseenter", () => {
    // Fügt die Klasse 'active-left' zum Container hinzu, um den linken aktiven Zustand zu aktivieren
    containerEl.classList.add("active-left");
    // Entfernt die Klasse 'active-right', um den rechten aktiven Zustand zu deaktivieren
    containerEl.classList.remove("active-right");
});

// Fügt einen Ereignis-Listener für das 'mouseleave'-Ereignis auf dem linken Element hinzu
leftEl.addEventListener("mouseleave", () => {
    // Entfernt die Klasse 'active-left', wenn die Maus den linken Bereich verlässt
    containerEl.classList.remove("active-left");
});

// Fügt einen Ereignis-Listener für das 'mouseenter'-Ereignis auf dem rechten Element hinzu
rightEl.addEventListener("mouseenter", () => {
    // Fügt die Klasse 'active-right' zum Container hinzu, um den rechten aktiven Zustand zu aktivieren
    containerEl.classList.add("active-right");
    // Entfernt die Klasse 'active-left', um den linken aktiven Zustand zu deaktivieren
    containerEl.classList.remove("active-left");
});

// Fügt einen Ereignis-Listener für das 'mouseleave'-Ereignis auf dem rechten Element hinzu
rightEl.addEventListener("mouseleave", () => {
    // Entfernt die Klasse 'active-right', wenn die Maus den rechten Bereich verlässt
    containerEl.classList.remove("active-right");
});
