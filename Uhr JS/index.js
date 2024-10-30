"use strict";

function aktualisiereUhr () {

    let aktuelleZeit = new Date();

    let hinzufügenStd = document.getElementById("std");
    let hinzufügenMin = document.getElementById("min");
    let hinzufügenSek = document.getElementById("sek");

    let std = aktuelleZeit.getHours();
    let min = aktuelleZeit.getMinutes();
    let sek = aktuelleZeit.getSeconds();

    // Fügt Nullen hinzu
    std = std < 10 ? "0" + std : std ;
    min = min < 10 ? "0" + min : min ;
    sek = sek < 10 ? "0" + sek : sek ;
    
    hinzufügenStd.textContent = std;
    hinzufügenMin.textContent = min;
    hinzufügenSek.textContent = sek;
}

setInterval(aktualisiereUhr, 1000);

aktualisiereUhr();