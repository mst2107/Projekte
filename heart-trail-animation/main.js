// Wähle das <body>-Element aus und speichere es in der Variable 'bodyElement'
const bodyElement = document.querySelector("body");

// Füge einen Event-Listener für das 'mousemove'-Ereignis hinzu
bodyElement.addEventListener("mousemove", (event) => {
    // Bestimme die Position der Maus relativ zum Element
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    // Erstelle ein neues <span>-Element
    const spanEl = document.createElement("span");

    // Setze die Position des <span>-Elements basierend auf der Mausposition
    spanEl.style.position = 'absolute'; // Stelle sicher, dass das <span>-Element absolut positioniert ist
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    // Bestimme eine zufällige Größe für das <span>-Element
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // Setze die Hintergrundfarbe und andere Stile (optional, falls benötigt)
    spanEl.style.background = 'url("https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_54-256.png")'; // Beispielhintergrund
    spanEl.style.backgroundSize = 'cover';
    spanEl.style.pointerEvents = 'none'; // Verhindert, dass das <span>-Element auf Mausereignisse reagiert

    // Füge das <span>-Element zum <body>-Element hinzu
    bodyElement.appendChild(spanEl);

    // Entferne das <span>-Element nach 3000 Millisekunden (3 Sekunden)
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
