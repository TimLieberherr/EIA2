/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    // DOT ÄNDERN
    class Dot extends DrunkenSailor.SuperClass {
        // Constructor Dots
        constructor() {
            super();
            this.radius = 30;
            this.setStartPosition();
        } // Constructor
        // CheckPosition Window Alert
        checkPosition() {
            for (let i = 0; i < DrunkenSailor.enemies.length; i++) {
                if (125 == DrunkenSailor.enemies[i].x) {
                    window.alert("gameOver");
                    console.log("gameOver");
                }
            }
        } // CheckPosition
        // SetStartPosition
        setStartPosition() {
            this.x = 125;
            this.y = 550;
        }
        draw() {
            DrunkenSailor.crc2.fillStyle = "#4c4c4c";
            DrunkenSailor.crc2.beginPath();
            DrunkenSailor.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            DrunkenSailor.crc2.closePath();
            DrunkenSailor.crc2.fill();
            DrunkenSailor.crc2.strokeStyle = "transparent";
            DrunkenSailor.crc2.stroke();
        }
        move() {
            this.x += 0;
            this.y -= 0;
        }
    }
    DrunkenSailor.Dot = Dot;
})(DrunkenSailor || (DrunkenSailor = {})); //namespace
//# sourceMappingURL=Dot.js.map