// Eventlistener
// ablaufdiagramme
// aktuelle Aufgaben
// korrektur von jedem einzelnen, Probleme besprechen
moritz.roetner@hs-furtwangen.de

namespace Tutorium {
    
    function f(x: number): number {
        return x+2;        
    }
    
    var ergebnis = f(2); // = 4
    
    var numbersArray: number[] = [0, 1, 2, 10, 5, 7, 99];
    
    function findNumberInArray(_number: number): boolean {
        for(let i: number = 0; i < numbersArray.length; i++)
        {
            
        let currentNumber: number = numbersArray[i];
        if(currentNumber == _number)
            return true;
               
        }    
        
        return false;
    }
    
    
    
    
    
    // Studenten haben Daten
    // Studenten haben einen Namen
    // Studenten haben einen ersten Namen
    // Studenten haben eine Matrikelnummer
    // Alter
    // Geschlecht
    
    interface Noten {
        fach: string;
        note: number;
    };
    
    interface StudiTut {
      name: string;
      firstName: string;
      matrikelNummer: number;
      age: number;
      gender: boolean;
      noten: Noten[];
    };
    
    let notenFuerMuellerEIA1 = {
        fach: "EIA1",
        note: 3.7  
    };
    
    let notenFuerMuellerEIA2 = {
        fach: "EIA2",
        note: 1.3  
    };
    
    
    let mueller: StudiTut = {
        name: "Müller",
        firstName: "Heinz",
        matrikelNummer: 244681,
        age: 10,
        gender: false,
        noten: [notenFuerMuellerEIA1, notenFuerMuellerEIA2]  
    };
    
    mueller["name"] = "Müller";
    mueller["age"] = 10;
    
    let meier: StudiTut = {
        name: "Meier",
        firstName: "Heinz",
        matrikelNummer: 244681,
        age: 10,
        gender: false  
    }; 
    
    // iteration eines heterogenen/homogenen assoziativen arrays
    let count: number = 0;
    for(let key in meier)
    {
        count++;
        console.log(meier[key]);
    }
    console.log("Anzahl der Elemente " + count);
    
    console.log(mueller.age);
    let alterVomMeier = meier["age"];
    
    
    let allStudents: StudiTut[] = [mueller, meier];
    
    
    
    // Struktur des heterogenen assoziativen Arrays als Datensatz für eine studierende Person
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {
         [matrikel: string]: Studi;
    }

    // Simples Array zum Speichern der Studi-Datensätze (nur zur Demonstration)
    export let studiSimpleArray: Studi[] = [];
    
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};
   
    
}