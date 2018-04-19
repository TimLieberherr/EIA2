/* Aufgabe: Aufgabe 2 Memory
Name: Tim Lieberherr
Matrikel: 257969
Datum: 14.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

Dieser Code wurde in der Gruppenarbeit mit Gruppe Grün erstellt unter Anleitung von Melvin Busch */
var Memory;
(function (Memory) {
    document.addEventListener("DOMContentLoaded", main);
    // Variablen deklarieren
    var cardContent = ["Katze", "Hund", "Löwe", "Kuh", "Pferd", "Elefant", "Affe", "Igel", "Otter", "Maus"];
    /* Noch mehr Tiere zur Erweiterung des Arrays: "Pinguin", "Jaguar", "Tintenfisch", "Papagei", "Fuchs", "Delfin",
      "Giraffe", "Schwein", "Maus", "Nashorn", "Tiger", "Schmetterling", "Eule", "Adler", "Krokodil", "Ziege", "Schlange" */
    var cardArray = [];
    // leeres Array, in das die letztendlich für das Spiel benötigten Karten als divs hineingespeichert werden
    var numPairs;
    var numPlayers;
    var playerInfo;
    var cardField;
    var player = [];
    var score = [0, 0, 0, 0];
    function main() {
        // Spieler soll Anzahl der Kartenpaare eingeben
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            numPairs = 8;
        }
        // Spieler sollen angeben, wie viele spielen wollen
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        numPlayers > 4 ? numPlayers = 4 : numPlayers = numPlayers;
        // DOM abhängige Varaiblen deklarieren
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        // Spielkarten erzeugen
        for (var i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // word an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
        }
        // Karten mischen
        randomMix(cardArray);
        // Karten dem Spielbrett hinzufügen
        for (var i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
        showPlayerandScore();
    }
    function createCard(textDerAufDieKarteSoll, _state) {
        var card = document.createElement("div");
        // div erzeugen
        card.innerText = textDerAufDieKarteSoll;
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten
    }
    function showPlayerandScore() {
        var childNodeHTML = "";
        childNodeHTML += "<div>";
        for (var i = 0; i < player.length; i++) {
            childNodeHTML += "<div id=player-info";
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spielername: ";
            childNodeHTML += player[i];
            childNodeHTML += "</p>";
            childNodeHTML += "<p>Punktestand: ";
            childNodeHTML += score[i];
            childNodeHTML += "</p></div>";
            childNodeHTML += "</div>";
        }
    }
    // Shuffle Arrays
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [_array[j], _array[i]], _array[i] = _a[0], _array[j] = _a[1];
        }
        return _array;
        var _a;
        // Ausgabe = das Array ist jetzt durchmischt
    }
    // Zufallsgenerator als eigene funktion = schöner & funktioniert besser :D
    function randomState() {
        var randomState = Math.random();
        // zufällige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte verdeckt ist
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl größer als 0,5 und kleiner gleich 0,75 - dann Status: taken
            return "taken";
        }
        else if (randomState > .75) {
            // oder wenn: Wenn Zahl größer als 0,75 - dann Status: visible
            return "visible";
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe 2 Memory.js.map