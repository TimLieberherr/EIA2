/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    // Enviroment Funktion - Aufrufen Floor & Background
    function environment() {
        waves();
        background();
        hill_1(75, 550);
        hill_2(160, 550);
        hill_2(630, 550);
        hill_2(830, 550);
        hill_1(715, 550);
    }
    DrunkenSailor.environment = environment; // Enviroment
    // Waves Function
    function waves() {
        let gradient = DrunkenSailor.crc2.createLinearGradient(350, 550, 350, 700);
        gradient.addColorStop(0, "#81DAF5");
        gradient.addColorStop(1, "#0489B1");
        DrunkenSailor.crc2.fillStyle = gradient;
        DrunkenSailor.crc2.beginPath();
        DrunkenSailor.crc2.moveTo(0, 550);
        DrunkenSailor.crc2.lineTo(1000, 550);
        DrunkenSailor.crc2.lineTo(1000, 700);
        DrunkenSailor.crc2.lineTo(0, 700);
        DrunkenSailor.crc2.closePath();
        DrunkenSailor.crc2.fill();
        DrunkenSailor.crc2.strokeStyle = "transparent";
        DrunkenSailor.crc2.stroke();
    } // Waves
    // Background Function
    function background() {
        let gradient = DrunkenSailor.crc2.createLinearGradient(350, 0, 350, 550);
        gradient.addColorStop(0, "#FDFDE5");
        gradient.addColorStop(1, "#BFF4FD");
        DrunkenSailor.crc2.fillStyle = gradient;
        DrunkenSailor.crc2.beginPath();
        DrunkenSailor.crc2.moveTo(0, 0);
        DrunkenSailor.crc2.lineTo(1000, 0);
        DrunkenSailor.crc2.lineTo(1000, 550);
        DrunkenSailor.crc2.lineTo(0, 550);
        DrunkenSailor.crc2.lineTo(0, 0);
        DrunkenSailor.crc2.closePath();
        DrunkenSailor.crc2.fill();
        DrunkenSailor.crc2.strokeStyle = "transparent";
        DrunkenSailor.crc2.stroke();
    } // Background 
    // Hill Funktion
    function hill_1(_x, _y) {
        DrunkenSailor.crc2.fillStyle = "rgb(4, 123, 140, 0.7)";
        DrunkenSailor.crc2.beginPath();
        DrunkenSailor.crc2.moveTo(_x, _y);
        DrunkenSailor.crc2.lineTo(_x, _y - 150);
        DrunkenSailor.crc2.quadraticCurveTo(_x + 5, _y - 200, _x + 50, _y - 200);
        DrunkenSailor.crc2.quadraticCurveTo(_x + 95, _y - 200, _x + 100, _y - 150);
        DrunkenSailor.crc2.lineTo(_x + 100, _y);
        DrunkenSailor.crc2.closePath();
        DrunkenSailor.crc2.fill();
        DrunkenSailor.crc2.strokeStyle = "transparent";
        DrunkenSailor.crc2.stroke();
    } // Hill
    // Hill 2 Funktion
    function hill_2(_x, _y) {
        DrunkenSailor.crc2.fillStyle = "rgb(63, 106, 112, 0.7)";
        DrunkenSailor.crc2.beginPath();
        DrunkenSailor.crc2.moveTo(_x, _y);
        DrunkenSailor.crc2.lineTo(_x, _y - 100);
        DrunkenSailor.crc2.quadraticCurveTo(_x + 5, _y - 150, _x + 50, _y - 150);
        DrunkenSailor.crc2.quadraticCurveTo(_x + 95, _y - 150, _x + 100, _y - 100);
        DrunkenSailor.crc2.lineTo(_x + 100, _y);
        DrunkenSailor.crc2.closePath();
        DrunkenSailor.crc2.fill();
        DrunkenSailor.crc2.strokeStyle = "transparent";
        DrunkenSailor.crc2.stroke();
    } // Hill 2
})(DrunkenSailor || (DrunkenSailor = {})); // namespace
//# sourceMappingURL=Environment.js.map