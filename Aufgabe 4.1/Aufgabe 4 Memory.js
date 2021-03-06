/* Aufgabe: Aufgabe 4 Memory
Name: Tim Lieberherr
Matrikel: 257969
Datum: 14.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

Dieser Code wurde in der Gruppenarbeit mit Gruppe Grün erstellt */
var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", main);
    document.addEventListener("DOMContentLoaded", main);
    /** Variablen erzeugen**/
    // Leeres Array für die Divs
    let cardArray = [];
    // Zwischenspeicher für Karteninhalt mit leerem Array
    let openCards = 0;
    let openArray = [];
    // Erzeugt im HTML das Spielfeld und die Punkteanzeige
    let playerInfo;
    let cardField;
    let checkContent = [];
    let counterMenge = 1;
    let playerCounter = 1;
    let playerScore = 0;
    /** Funktionen**/
    function main() {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("counterinfo").addEventListener("change", createCounter);
    }
    function addPlayer() {
        if (playerCounter < 6) {
            let player = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "10");
            player.setAttribute("id", "player");
            document.getElementById("names").appendChild(player);
            playerCounter++;
        }
    }
    function removePlayer() {
        document.getElementById("player").remove();
        playerCounter--;
    }
    function createCounter() {
        if (counterMenge == 1) {
            let counter = document.createElement("input");
            counter.setAttribute("type", "number");
            counter.setAttribute("value", "6");
            counter.setAttribute("min", "5");
            counter.setAttribute("max", Aufgabe4.decks[document.getElementsByTagName("select").item(0).value].cardBatch);
            counter.setAttribute("step", "1");
            counter.setAttribute("id", "counter");
            document.getElementById("counterbox").appendChild(counter);
            counterMenge++;
        }
        else {
            counterUpdate();
        }
    }
    function counterUpdate() {
        document.getElementById("counter").remove();
        counterMenge--;
        createCounter();
    }
    //Karte initialisieren
    function createCard(_cardContent) {
        let card = document.createElement("div");
        // div erzeugen
        card.innerHTML = "<p>" + _cardContent + "</p>";
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten, die durch ".push" hinzugefügt werden
        checkContent.push(card);
        // Alle Karten werden in checkContent-Array gepusht
        // card.addEventListener("click", clickHandler);
    }
    function clickHandler(_event) {
        //Event-Handler
        let cardClass = _event.target;
        // Gibt das HTMLElement zurück, das den Event ausgelöst hat
        if (cardClass.classList.contains("card")) {
            // classList = gibt den Klassen Namen eines Elements zurück, es können CSS Klassen hinzugefügt und zurückgesetzt werden (w3Schools)
            openCards++;
            // Counter
            if (cardClass.classList.contains("hidden")) {
                // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");
                // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible");
                // Klassen-Namen wird auf "visible" gesetzt
                openArray.push(cardClass);
            }
        }
        if (openCards == 2) {
            // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1500);
        }
        if (openCards > 2) {
            // es können nicht mehr als 2 Karten angeklickt werden, bzw. sie werden nicht "visible"
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }
    function cardsCompare() {
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
            // wenn die beiden Karten im openArray identisch sind, dann:
            for (let i = 0; i < 2; i++) {
                // Status "visible" wird zu "taken"
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("taken");
            }
            checkContent.splice(0, 2);
        }
        else {
            // Ansonsten wird der Status von "visible" auf "hidden" geÃ¤ndert
            for (let i = 0; i < openArray.length; i++) {
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("hidden");
            }
        }
        winnerAlert();
        openArray = [];
        openCards = 0;
    }
    // Wenn alle Karten "taken" sind, dann erscheint ein Pop Up Fenster "winnerAlert"
    function winnerAlert() {
        if (checkContent.length == 0) {
            alert("Gratulation du hast Gewonnen");
        }
    }
    // Shuffle-Array
    function randomMix(_array) {
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
    }
    // Funktion zum Anzeigen der Spielerinfo und des Memories
    function start() {
        document.getElementById("interface").style.display = "none";
        document.getElementById("player-info").style.display = "block";
        document.getElementById("card-field").style.display = "block";
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        cardField.addEventListener("click", clickHandler);
        let inputs = document.getElementsByTagName("input");
        let numPairs = parseInt(document.getElementById("counter").value);
        // Spieler Anzeige generieren
        for (let i = 0; i < playerCounter; i++) {
            let playerDiv = document.createElement("div");
            document.getElementById("player-info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + playerScore + " Punkte";
        }
        //Karten erzeugen
        for (let i = 0; i < numPairs; i++) {
            createCard(Aufgabe4.decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(Aufgabe4.decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }
        //Aufruf des Shuffle Algorithmus
        randomMix(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            document.getElementById("card-div").appendChild(cardArray[i]);
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe 4 Memory.js.map