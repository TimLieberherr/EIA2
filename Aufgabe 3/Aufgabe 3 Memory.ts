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
            createCard(cardContent[i], "open");
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i], "");
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
    
     /** Klickbar machen Aufgabe 3**/
    
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