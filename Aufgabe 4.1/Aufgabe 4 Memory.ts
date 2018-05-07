/* Aufgabe: Aufgabe 4 Memory
Name: Tim Lieberherr
Matrikel: 257969
Datum: 14.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 

Dieser Code wurde in der Gruppenarbeit mit Gruppe Grün erstellt */

 namespace Aufgabe4 {
    window.addEventListener("load", main);
    document.addEventListener("DOMContentLoaded", main);
    
    /** Variablen erzeugen**/
    
    // Leeres Array für die Divs
    let cardArray: HTMLElement[] = [];
    
    // Zwischenspeicher für Karteninhalt mit leerem Array
    let openCards: number = 0;
    let openArray: HTMLElement[] = [];

    // Erzeugt im HTML das Spielfeld und die Punkteanzeige
    let playerInfo: HTMLElement;
    let cardField: HTMLElement;
    
    let checkContent: HTMLElement[] = [];
    let counterMenge: number = 1;

    let playerCounter: number = 1;
    let playerScore: number = 0;


 
/** Funktionen**/
    
    function main(): void {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("counterinfo").addEventListener("change", createCounter);
    }

    function addPlayer(): void {
        if (playerCounter < 6) {
            let player: HTMLElement = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "10");
            player.setAttribute("id", "player");
            document.getElementById("names").appendChild(player);
            playerCounter++;
        }
    }

    function removePlayer(): void {
        document.getElementById("player").remove();
        playerCounter--;
    }

    function createCounter(): void {
        if (counterMenge == 1) {
            let counter: HTMLElement = document.createElement("input");
            counter.setAttribute("type", "number");
            counter.setAttribute("value", "6");
            counter.setAttribute("min", "5");
            counter.setAttribute("max", decks[document.getElementsByTagName("select").item(0).value].cardBatch);
            counter.setAttribute("step", "1");
            counter.setAttribute("id", "counter");
            document.getElementById("counterbox").appendChild(counter);
            counterMenge++;
        }
        else {
            counterUpdate();
        }
    }

    function counterUpdate(): void {
        document.getElementById("counter").remove();
        counterMenge--;
        createCounter();
    }

    //Karte initialisieren
    function createCard(_cardContent: string): void {
        let card: HTMLElement = document.createElement("div");
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

    function clickHandler(_event: MouseEvent): void {
        //Event-Handler
        let cardClass: HTMLElement = <HTMLElement>_event.target;
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
                // wenn die Karten "visible" sind, dann werden sie in das openArray gepusht
            }
        }

        if (openCards == 2) {
            // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1500);
            // Timeout für 2000 ms bzw. 1,5 Sekunden
        }

        if (openCards > 2) {
            // es können nicht mehr als 2 Karten angeklickt werden, bzw. sie werden nicht "visible"
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }

    function cardsCompare(): void {
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
            // wenn die beiden Karten im openArray identisch sind, dann:
            for (let i: number = 0; i < 2; i++) {
                // Status "visible" wird zu "taken"
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("taken");
            }

            checkContent.splice(0, 2);
            // Karten werden aus dem checkContent entfernt
            // angefangen zu zÃ¤hlen innerhalb des Arrays bei Stelle 0, 2 = 2 Elemente werden entfernt
        }

        else {
            // Ansonsten wird der Status von "visible" auf "hidden" geÃ¤ndert
            for (let i: number = 0; i < openArray.length; i++) {
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("hidden");
            }
        }

        winnerAlert();
        openArray = [];
        openCards = 0;
    }

    // Wenn alle Karten "taken" sind, dann erscheint ein Pop Up Fenster "winnerAlert"
    function winnerAlert(): void {
        if (checkContent.length == 0) {
            alert("Gratulation du hast Gewonnen");
        }
        
    
    }

    // Shuffle-Array
    function randomMix(_array: HTMLElement[]): HTMLElement[] {
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
    }

    // Funktion zum Anzeigen der Spielerinfo und des Memories
    function start(): void {
        document.getElementById("interface").style.display = "none";
        document.getElementById("player-info").style.display = "block";
        document.getElementById("card-field").style.display = "block";
        
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");

        cardField.addEventListener("click", clickHandler);

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let numPairs: number = parseInt((<HTMLInputElement>document.getElementById("counter")).value);

        // Spieler Anzeige generieren
        for (let i: number = 0; i < playerCounter; i++) {
            let playerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("player-info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + playerScore + " Punkte";
        }

        //Karten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }

        //Aufruf des Shuffle Algorithmus
        randomMix(cardArray);

        for (let i: number = 0; i < cardArray.length; i++) {
            document.getElementById("card-div").appendChild(cardArray[i]);
        }

    }
}