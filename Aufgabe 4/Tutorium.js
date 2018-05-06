// Eventlistener
// ablaufdiagramme
// aktuelle Aufgaben
// korrektur von jedem einzelnen, Probleme besprechen
moritz.roetner;
-furtwangen.de;
var Tutorium;
(function (Tutorium) {
    function f(x) {
        return x + 2;
    }
    var ergebnis = f(2); // = 4
    var numbersArray = [0, 1, 2, 10, 5, 7, 99];
    function findNumberInArray(_number) {
        for (var i = 0; i < numbersArray.length; i++) {
            var currentNumber = numbersArray[i];
            if (currentNumber == _number)
                return true;
        }
        return false;
    }
    ;
    ;
    var notenFuerMuellerEIA1 = {
        fach: "EIA1",
        note: 3.7
    };
    var notenFuerMuellerEIA2 = {
        fach: "EIA2",
        note: 1.3
    };
    var mueller = {
        name: "Müller",
        firstName: "Heinz",
        matrikelNummer: 244681,
        age: 10,
        gender: false,
        noten: [notenFuerMuellerEIA1, notenFuerMuellerEIA2]
    };
    mueller["name"] = "Müller";
    mueller["age"] = 10;
    var meier = {
        name: "Meier",
        firstName: "Heinz",
        matrikelNummer: 244681,
        age: 10,
        gender: false
    };
    // iteration eines heterogenen/homogenen assoziativen arrays
    var count = 0;
    for (var key in meier) {
        count++;
        console.log(meier[key]);
    }
    console.log("Anzahl der Elemente " + count);
    console.log(mueller.age);
    var alterVomMeier = meier["age"];
    var allStudents = [mueller, meier];
    // Simples Array zum Speichern der Studi-Datensätze (nur zur Demonstration)
    Tutorium.studiSimpleArray = [];
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    Tutorium.studiHomoAssoc = {};
})(Tutorium || (Tutorium = {}));
//# sourceMappingURL=Tutorium.js.map