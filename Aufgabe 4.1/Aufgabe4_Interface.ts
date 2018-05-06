 namespace Aufgabe4 {
     
     // Interface Karte
     export interface CardDeck {
            cardContent: string[];
            cardColor: string;
            cardFont: string;
            cardBatch: string;
     }
    
     export let deck: CardDeck;
    
     export interface CardPacket {
            [cardName: string]: CardDeck;
     }; 

     export let decks: CardPacket = {};
            deck = {
                cardContent: ["Katze", "Hund", "Löwe", "Kuh", "Pferd", "Elefant", "Affe", "Igel", "Otter", "Maus", "Tintenfisch", "Papagei", "Fuchs", "Delfin", 
                                 "Giraffe", "Schwein", "Maus", "Nashorn", "Tiger", "Schmetterling", "Eule", "Adler", "Krokodil", "Ziege", "Schlange"],
                cardColor: "green",
                cardFont: "sans-serif",
                cardBatch: "25"
      };
    
      decks["animals"] = deck;
    
      deck = {
                cardContent: ["Banane", "Mango", "Ananas", "Apfel", "Birne", "Trauben", "Erdbeere", "Himbeere", "Orange", "Mandarine", "Papaya", "Kiwi", "Wassermelone"],
                cardColor: "brown",
                cardFont: "sans-serif",
                cardBatch: "13"
      };
    
      decks["fruits"] = deck;
    
      deck = {
                cardContent: ["The Killers", "The Who", "Jimi Hendrix", "Jack White", "Slash" ],
                cardColor: "yellow",
                cardFont: "sans-serif",
                cardBatch: "5"
        };
     
      decks["bands"] = deck;
 
     export interface Scoreboard {
                player: string;
                score: number;
      }
     export let scoreboard: Scoreboard[] = [];
}