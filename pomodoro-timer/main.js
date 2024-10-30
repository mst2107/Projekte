const startEl = document.getElementById("start"); // Holt das Start-Button-Element
const stopEl = document.getElementById("stop");   // Holt das Stop-Button-Element
const resetEl = document.getElementById("reset"); // Holt das Reset-Button-Element
const timerEl = document.getElementById("timer"); // Holt das Timer-Display-Element

let interval; // Variable, um das Intervall zu speichern (wird genutzt, um sicherzustellen, dass nur ein Timer läuft)
let timeLeft = 1500; // Initiale Zeit in Sekunden (hier  1500)

function updateTimer() {
    // Berechne die Minuten und Sekunden aus der verbleibenden Zeit
    let minutes = Math.floor(timeLeft / 60); 
    let seconds = timeLeft % 60;

    // Formatiere die Zeit als MM:SS (mit führenden Nullen, falls nötig)
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Aktualisiere die Anzeige im Timer-Element
    timerEl.innerHTML = formattedTime;
}

function startTimer() {
    // Überprüfen, ob bereits ein Timer läuft (interval ist gesetzt). Falls nein, Timer starten.
    if (!interval) {
        interval = setInterval(() => {
            if (timeLeft > 0) {
                // Reduziert die verbleibende Zeit und aktualisiert die Anzeige
                timeLeft--;
                updateTimer();
            } else {
                // Wenn die Zeit abgelaufen ist, Timer stoppen und Benachrichtigung anzeigen
                clearInterval(interval);
                interval = null; // Setze das Intervall zurück, um einen Neustart zu ermöglichen
                alert("Time's up!");
            }
        }, 1000); // Intervall von 1 Sekunde (1000 Millisekunden)
    }
}

function stopTimer() {
    // Stoppt das laufende Intervall und setzt den Timer zurück
    clearInterval(interval);
    interval = null; // Setze das Intervall zurück, um einen Neustart zu ermöglichen
}

function resetTimer() {
    // Stoppt den Timer, setzt die Zeit zurück und aktualisiert die Anzeige
    clearInterval(interval);
    interval = null; // Setze das Intervall zurück, um einen Neustart zu ermöglichen
    timeLeft = 1500; // Setzt die Zeit auf den ursprünglichen Wert (1500 Sekunden) zurück
    updateTimer(); // Aktualisiert die Anzeige sofort
}

// Fügt Event Listener hinzu, um auf die Schaltflächenklicks zu reagieren
startEl.addEventListener("click", startTimer); // Startet den Timer beim Klicken
stopEl.addEventListener("click", stopTimer);   // Stoppt den Timer beim Klicken
resetEl.addEventListener("click", resetTimer); // Setzt den Timer zurück beim Klicken

// Zeigt den Timer initial an, bevor eine Aktion ausgeführt wird
updateTimer();
