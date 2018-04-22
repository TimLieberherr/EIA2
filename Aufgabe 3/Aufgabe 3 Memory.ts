/* Aufgabe: Aufgabe 2 Memory
Name: Tim Lieberherr
Matrikel: 257969
Datum: 14.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 

Dieser Code wurde in der Gruppenarbeit mit Gruppe Grün erstellt unter Anleitung von Melvin Busch */

namespace Memory {

    document.addEventListener("DOMContentLoaded", main);

    /** Variablen**/


    // Karteninhalt, Memorybegriffe
    let cardContent: string[] = ["Katze", "Hund", "Löwe", "Kuh", "Pferd", "Elefant", "Affe", "Igel", "Otter", "Maus"];

    /* Noch mehr Tiere zur Erweiterung des Arrays: "Pinguin", "Jaguar", "Tintenfisch", "Papagei", "Fuchs", "Delfin", 
      "Giraffe", "Schwein", "Maus", "Nashorn", "Tiger", "Schmetterling", "Eule", "Adler", "Krokodil", "Ziege", "Schlange" */

    let cardArray: HTMLElement[] = [];
    // leeres Array, in das die letztendlich für das Spiel benötigten Karten als divs hineingespeichert werden

    //Arrays für die Paare und die Spielerzählung die vom User bestimmt wird 
    let numPairs: number;
    let numPlayers: number;

    // Erzeugt im HTML das Spielfeld und die Punkteanzeige
    let playerInfo: HTMLElement;
    let cardField: HTMLElement;

    // Zählt die Punkte
    let player: string[] = [];
    let score: number[] = [0, 0, 0, 0];

    // Zwischenspeicher für Karteninhalt mit leerem Array
    let openArray: string[] = [];
    let openCards: number = 0;

    /** Funktionen**/

    function main(): void {

        // Funktionsaufruf
        cardPairs();
        // Funktionsaufruf
        numsPlayer();

        // Informationen sollen in HTML eingefügt werden -> DOM abhängige Varaiblen erstellen = HTMLElement
        playerInfo = document.getElementById("player-info"); // Stelle in HTML = Verknüpfung in HTML
        cardField = document.getElementById("card-div");

        // Spielkarten erzeugen - 2 mal createCard => 1Kartenpaar
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
        }

        // Funktionsaufruf
        randomMix(cardArray);

        // Karten dem Spielbrett in cardField hinzufügen
        for (let i: number = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
            // dem Spielbrett hinzufügen
        }

        // Spieler Anzeige generieren -> ersetzt class von Melvin
        for (let i: number = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
            // Aufruf der Funktion - score wird mitgegeben und die Variable name + Nummer des Spielers, die hochzählt | [i+1] damit Anzeigestart mit 1 nicht 0
        }

        cardField.addEventListener("click", clickHandler); // Eventlistener liegt auf cardField
        // Verweis auf die Funktion clickHandler

    }/****************** main function schließen*******************/



    function cardPairs(): void {                                                // parseInt wandelt string in number um weil numPairs number erwartet  ;10 am Ende legt Dezimalsystem für Eingabe fest
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            cardPairs();
            // Bei falscher Angabe erscheint das PopUp-Fenster erneut
        }
    }

    function numsPlayer(): void {
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            numsPlayer();
            // Bei falscher Angabe erscheint das PopUp-Fenster erneut
        }
    }

    function createPlayer(_score: number, _name: string): void {
        let player: HTMLElement = document.createElement("div");
        let scoreField: HTMLElement = document.createElement("div");        // Umwandeln einer number in string - _score: number soll als string in scorefield angezeigt werden.
        let n: string = _score.toString();
        player.innerText = _name; //name ist Variable von oben = global
        // deshalb ist scoreField = n
        scoreField.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(scoreField);
    }

    function createCard(_textDerAufDieKarteSoll: string): void {                // Unterstrich = Parameter siehe CodingStyleGuide 
        let card: HTMLElement = document.createElement("div");                  // div erzeugen

        card.innerHTML = `<span>${_textDerAufDieKarteSoll}</span>`;             //  innerHTML erwartet string `` | span = HTMLElement Kontainer mit spezifischer Zuweisung | $ = 'string' + variable + 'string'
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut zu div hinzufügen: class = CSS; card = zugehöriger Wert aus dem CSS Dokument
        cardArray.push(card);                                                   // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten, die durch ".push" hinzugefügt werden
    }

    function randomMix(_array: HTMLElement[]): HTMLElement[] {              // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;                                                      // Ausgabe -> das Array ist jetzt durchgemischt
    }

    function clickHandler(_event: MouseEvent): void {
        let cardClass: HTMLElement = <HTMLElement>_event.target;                // Gibt das HTMLElement zurück, das den Event ausgelöst hat
        if (cardClass.classList.contains("card")) {                             // classList = gibt den Klassen Namen eines Elements zurück, es können CSS Klassen hinzugefügt und zurückgesetzt werden (w3Schools)
            openCards++;                                                           // Counter
            if (cardClass.classList.contains("hidden")) {                       // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");                           // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible");                             // Klassen-Namen wird auf "visible" gesetzt
            }
        }

        if (openCards == 2) {                                                   // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1500);                                     // Timeout für 2000 ms bzw. 1,5 Sekunden
        }

        if (openCards > 2) {                                                    // es können nicht mehr als 2 Karten angeklickt werden, bzw. sie werden nicht "visible"
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }

    function cardsCompare(): void {
        let openArray: HTMLElement[] = filterCardsByClass("visible");        // Definition des openArray, solle Funktion filterCardsByClass ausführen
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {   // wenn das Kind an der Stelle [0] und das Kind der Stelle [1] gleich sind, dann:
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");                    // "visible" wird entfernt
                openArray[f].classList.add("taken");                         // und durch "taken" ersetzt
            }
        }
        else {                                                               // wenn die Kinder des Arrays nicht identisch sind, dann:
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");                    // "visible" wird entfernt
                openArray[f].classList.add("hidden");                        // und durch "hidden" ersetzt
            }
        }

        congratAlert();                                                      // Funktionsaufruf
        openArray = [];                                                      // leeres openArray - Array wird aufgerufen
        openCards = 0;                                                       // openCards auf 0 setzen
    }

    function filterCardsByClass(_filter: string): HTMLElement[] {
        return cardArray.filter(card => card.classList.contains(_filter));      // gibt dem cardArray einen Filter mit, der nach der CSS-Klasse filtert |  card (aus dem CSS-Dokument)

    }

    function congratAlert(): void {
        let cardsTaken: HTMLElement[] = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {                                        // wenn alle Karten den Status "taken" haben, dann erscheint ein PopUp Fenster
            alert("Mensch bist du gut!");
        }
        cardsTaken = [];
    }

} // namespace schließen
    
    /**function main(): void {
        
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
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
        }

        // Karten mischen
        randomMix(cardArray);

        // Karten dem Spielbrett hinzufügen
        for (let i: number = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
            // dem Spielbrett hinzufügen
        }

        showPlayerandScore();
        cardField.addEventListener("click", clickHandler);
    }


    // Karte wird mit Text verknüpft
    function createCard(textDerAufDieKarteSoll: string, _state: string): void {
        let card: HTMLElement = document.createElement("div");
        // div erzeugen
        card.innerText = textDerAufDieKarteSoll;
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten
    }
    
      function createPlayer(_score: number, _name: string): void {
        let player: HTMLElement = document.createElement("div");
        let scoreField: HTMLElement = document.createElement("div");        // Umwandeln einer number in string - _score: number soll als string in scorefield angezeigt werden.
        let n: string = _score.toString();
        player.innerText = _name; //name ist Variable von oben = global
        // deshalb ist scoreField = n
        scoreField.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(scoreField);
    }

    // Spielinfo wird im HTML erzeugt
    function showPlayerandScore(): void {
        let childNodeHTML: string = "";
        childNodeHTML += "<div>";
        for (let i: number = 0; i < player.length; i++) {
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
    function randomMix(_array: any[]): any[] {
        // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe = das Array ist jetzt durchmischt
    }
    
     // Klickbar machen Aufgabe 3
    
    // Eventlistener auf cardField mit Verweis auf Funktion Clickhandler
    function clickHandler(_event: MouseEvent): void {
        // Gibt HTMLElement zurück, das Event ausgelöst hat
        let cardClass: HTMLElement = <HTMLElement>_event.target;  
         // classList = gibt den Klassen CSS Befehle mit              
        if (cardClass.classList.contains("card")) {                            
            openCards++;                                 
            // Wenn das Element den Klassen-Namen "hidden" hat, dann                          
            if (cardClass.classList.contains("hidden")) { 
            // wird der Klassen-Namen "hidden"  gelöscht                      
                cardClass.classList.remove("hidden");  
           // und Klassen-Namen wird auf "visible" gesetzt                         
                cardClass.classList.add("visible");                             
            }
        }
        // Wenn zwei Karten offen daliegen, dann beginnt der Timout für 2000ms:
        if (openCards == 2) {                                                   
            setTimeout(cardsCompare, 2000);                                    
        }

         // Nicht mehr als 2 Karten können "visible" sein
        if (openCards > 2) {                                                   
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }
    
    // openArray, soll Funktion filterCardsByClass ausführen
    function cardsCompare(): void {
        let openArray: HTMLElement[] = filterCardsByClass("visible");    
        // wenn die Kinder an der Stelle [0] und [1] gleich sind, dann wird "visible" entfernt und durch "taken" ersetzt 
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {   
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");                    
                openArray[f].classList.add("taken");                         
            }
        }
       
         // Wenn die Kinder des Arrays nicht identisch sind, dann wird "visible" durch "hidden" ersetzt, nach dem Timeout
        else {                                                               
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");                    
                openArray[f].classList.add("hidden");                       
            }
        }
        
        // Funktionsaufruf von winnerAlert
        winnerAlert(); 
        // leeres openArray wird aufgerufen                                                   
        openArray = [];  
        // openCards auf 0 setzen da ja am Anfang alle Karten verdeckt sein sollen                                                  
        openCards = 0;                                                      
    }

     // gibt dem cardArray einen Filter mit, der nach der CSS-Klasse filtert, nach dem unser aufdecksystem funktioniert.
    function filterCardsByClass(_filter: string): HTMLElement[] {
        return cardArray.filter(card => card.classList.contains(_filter));     
    }

     // Wenn alle Karten "taken" sind, dann erscheint ein Pop Up Fenster "winnerAlert"
    function winnerAlert(): void {
        let cardsTaken: HTMLElement[] = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {                                       
            alert("Gratulation du hast Gewonnen");
            
        }
        cardsTaken = [];
    }


} 

 /**   // Zufallsgenerator als eigene funktion 
    function randomState(): string {
        let randomState: number = Math.random();
        // zufällige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte verdeckt ist
            return "hidden";
            // Status = hidden
        } else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl größer als 0,5 und kleiner gleich 0,75 - dann Status: taken
            return "taken";
        } else if (randomState > .75) {
            // oder wenn: Wenn Zahl größer als 0,75 - dann Status: visible
            return "visible";
        }
    } **/