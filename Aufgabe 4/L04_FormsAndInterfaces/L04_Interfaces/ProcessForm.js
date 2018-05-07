var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        var insertButton = document.getElementById("insert");
        var refreshButton = document.getElementById("refresh");
        var searchButton = document.getElementById("searchButton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        var inputs = document.getElementsByTagName("input");
        var genderButton = document.getElementById("male");
        var studyPath = document.getElementById("select");
        var matrikel = inputs[2].value;
        var studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            studyPath: studyPath.value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        L04_Interfaces.studiHomoAssoc[matrikel] = studi;
        L04_Interfaces.studiSimpleArray.push(studi);
    }
    function refresh(_event) {
        var output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        for (var matrikel in L04_Interfaces.studiHomoAssoc) {
            var studi = L04_Interfaces.studiHomoAssoc[matrikel];
            var line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.studyPath + ", ";
            line += studi.gender ? "männlich" : "weiblich";
            output.value += line + "\n";
        }
    }
    function search(_event) {
        var output = document.getElementById("textarea2");
        output.value = "";
        var matrikel = parseInt(document.getElementById("matrikelNr").value);
        var studi = L04_Interfaces.studiHomoAssoc[matrikel];
        if (typeof studi === "undefined") {
            output.value += "Kein Suchergebnis gefunden";
        }
        else {
            var line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre, ";
            line += studi.studyPath + ", ";
            line += studi.gender ? "männlich" : "weiblich";
            output.value += line + "\n";
        }
    }
    // zusätzliche Konsolenausgaben zur Demonstration
    console.group("Simple Array");
    console.log(L04_Interfaces.studiSimpleArray);
    console.groupEnd();
    console.group("Associatives Array (Object)");
    console.log(L04_Interfaces.studiHomoAssoc);
    console.groupEnd();
})(L04_Interfaces || (L04_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map