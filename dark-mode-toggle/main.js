// Wähle das Checkbox-Element und das Body-Element aus
const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

// Setze den Zustand des Checkboxes basierend auf dem Wert aus localStorage
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// Aktualisiere die Hintergrundfarbe des Bodies basierend auf dem Zustand des Checkboxes
updateBody();

// Funktion zum Aktualisieren der Hintergrundfarbe des Bodies
function updateBody() {
    if(inputEl.checked) {
        bodyEl.style.background = "black"; // Dunkelmodus aktiv
    } else {
        bodyEl.style.background = "white"; // Hellmodus aktiv
    }
}

// Füge einen Event-Listener hinzu, der bei Änderungen des Checkboxes ausgelöst wird
inputEl.addEventListener("input", () => {
    updateBody(); // Hintergrundfarbe aktualisieren
    updateLocalStorage(); // Den aktuellen Modus in localStorage speichern
})

// Funktion zum Aktualisieren von localStorage mit dem aktuellen Zustand des Checkboxes
function updateLocalStorage () {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
