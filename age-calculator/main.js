const btnEl = document.getElementById("btn"); // Button-Element, das den Altersberechnungsprozess startet
const birthdayEl = document.getElementById("birthday"); // Eingabefeld für das Geburtsdatum
const resultEl = document.getElementById("result"); // Element, in dem das Ergebnis (Alter) angezeigt wird

function calculateAge() {
    const birthdayValue = birthdayEl.value; // Holt den Wert (Geburtsdatum) aus dem Eingabefeld

    // Überprüft, ob ein Geburtsdatum eingegeben wurde
    if (birthdayValue === "") {
        alert("Please enter your birthday"); // Warnung anzeigen, wenn kein Datum eingegeben wurde
    } else {
        const age = getAge(birthdayValue); // Berechnet das Alter basierend auf dem Geburtsdatum
        // Setzt den Text in das Ergebnis-Element: "years" bei Mehrzahl, "year" bei Singular
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date(); // Holt das aktuelle Datum
    const birthdayDate = new Date(birthdayValue); // Wandelt den eingegebenen Wert in ein Date-Objekt um
    let age = currentDate.getFullYear() - birthdayDate.getFullYear(); // Berechnet das Alter basierend auf den Jahren
    const month = currentDate.getMonth() - birthdayDate.getMonth(); // Berechnet die Differenz in den Monaten

    // Falls der Geburtsmonat nach dem aktuellen Monat liegt oder der Geburtstag noch nicht war, wird das Alter um 1 reduziert
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--; // Reduziert das Alter, wenn der Geburtstag im laufenden Jahr noch nicht war
    }

    return age; // Gibt das berechnete Alter zurück
}

// Fügt den Event Listener für den Button hinzu, der die calculateAge-Funktion aufruft, wenn der Button geklickt wird
btnEl.addEventListener("click", calculateAge);
