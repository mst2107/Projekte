const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl => {
    counterEl.innerText = "0";
    incrementCounter();

    function incrementCounter() {
        let currentNum = +counterEl.innerText;  // Wandelt den aktuellen Text in eine Zahl um
        const dataCeil = +counterEl.getAttribute("data-ceil");  // Stellt sicher, dass data-ceil eine Zahl ist
        const increment = dataCeil / 15;  // Inkrement-Wert festlegen

        currentNum = Math.ceil(currentNum + increment);  // Erhöht den aktuellen Wert
        counterEl.innerText = currentNum;  // Setzt den neuen Wert im DOM

        // Wiederhole, bis der Zielwert erreicht ist
        if (currentNum < dataCeil) {
            setTimeout(incrementCounter, 50);  // Ruft die Funktion nach 50ms erneut auf
        } else {
            counterEl.innerText = dataCeil;  // Stellt sicher, dass der Endwert exakt erreicht wird
        }
    }
});
