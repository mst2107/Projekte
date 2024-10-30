// Zugriff auf das Textarea-Element und die Elemente, die den Zähler für die Gesamtanzahl und die verbleibende Anzahl der Zeichen anzeigen
const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

// Event-Listener, der auf jeden Tastendruck im Textarea reagiert (key-up Event)
// Bei jedem Tastendruck wird die Funktion "updateCounter" aufgerufen, um die Zähler zu aktualisieren
textAreaEl.addEventListener("keyup", () => {
    updateCounter();
});

// Initialer Aufruf der "updateCounter"-Funktion, um die Zähler direkt nach dem Laden der Seite zu aktualisieren
updateCounter();

// Funktion zur Aktualisierung der Zeichen-Zähler
function updateCounter() {
    // Aktualisiert die Gesamtlänge der eingegebenen Zeichen im totalCounterEl
    totalCounterEl.innerText = textAreaEl.value.length;

    // Berechnet die verbleibende Anzahl der erlaubten Zeichen, indem das Attribut "maxLength" des Textarea-Elements abgezogen wird
    remainingCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}
