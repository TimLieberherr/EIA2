/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    // Enviroment Function - Aufrufen Floor & Background
    function environment() {
        waves();
        background();
        cloud(-300, 110);
        cloud(25, -10);
        cloud(380, 90);
        cloud(700, 20);
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
    // Cloud Function 
    function cloud(_x, _y) {
        DrunkenSailor.crc2.beginPath();
        DrunkenSailor.crc2.moveTo(_x + 1, _y + +80);
        DrunkenSailor.crc2.bezierCurveTo(_x + 120, _y + 90, _x + 120, _y + 140, _x + 220, _y + 140);
        DrunkenSailor.crc2.bezierCurveTo(_x + 250, _y + 180, _x + 320, _y + 180, _x + 330, _y + 140);
        DrunkenSailor.crc2.bezierCurveTo(_x + 420, _y + 150, _x + 420, _y + 120, _x + 390, _y + 90);
        DrunkenSailor.crc2.bezierCurveTo(_x + 430, _y + 40, _x + 370, _y + 30, _x + 340, _y + 40);
        DrunkenSailor.crc2.bezierCurveTo(_x + 320, _y + 5, _x + 250, _y + 20, _x + 250, _y + 40);
        DrunkenSailor.crc2.bezierCurveTo(_x + 200, _y + 5, _x + 150, _y + 20, _x + 170, _y + 70);
        DrunkenSailor.crc2.closePath();
        DrunkenSailor.crc2.fillStyle = "#07C2EC";
        DrunkenSailor.crc2.fill();
        DrunkenSailor.crc2.strokeStyle = "transparent";
        DrunkenSailor.crc2.stroke();
    }
})(DrunkenSailor || (DrunkenSailor = {})); // namespace
//# sourceMappingURL=Background.js.map