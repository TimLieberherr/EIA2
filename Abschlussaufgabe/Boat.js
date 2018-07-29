/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    // DOT ÄNDERN
    class Boat extends DrunkenSailor.SuperClass {
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
            DrunkenSailor.crc2.beginPath();
            //Rumpf
            DrunkenSailor.crc2.fillStyle = "#873E22";
            DrunkenSailor.crc2.moveTo(this.x - 80, this.y - 43);
            DrunkenSailor.crc2.lineTo(this.x - 50, this.y + 20);
            DrunkenSailor.crc2.lineTo(this.x + 100, this.y + 20);
            DrunkenSailor.crc2.lineTo(this.x + 180, this.y - 30);
            //Spitze
            DrunkenSailor.crc2.lineTo(this.x + 230, this.y - 30);
            DrunkenSailor.crc2.lineTo(this.x + 230, this.y - 32);
            //Höcker
            DrunkenSailor.crc2.lineTo(this.x + 30, this.y - 32);
            DrunkenSailor.crc2.lineTo(this.x + 10, this.y - 43);
            //Mast 1
            DrunkenSailor.crc2.moveTo(this.x + 122, this.y - 32);
            DrunkenSailor.crc2.lineTo(this.x + 122, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x + 120, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x + 120, this.y - 32);
            //Segel 1
            DrunkenSailor.crc2.moveTo(this.x + 122, this.y - 32);
            DrunkenSailor.crc2.quadraticCurveTo(340, 460, 246, 410);
            DrunkenSailor.crc2.closePath();
            DrunkenSailor.crc2.fill();
            //Mast 2
            DrunkenSailor.crc2.moveTo(this.x + 60, this.y - 32);
            DrunkenSailor.crc2.lineTo(this.x + 60, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x + 58, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x + 58, this.y - 32);
            //Segel 2
            DrunkenSailor.crc2.moveTo(this.x + 60, this.y - 32);
            DrunkenSailor.crc2.quadraticCurveTo(280, 460, 185, 410);
            DrunkenSailor.crc2.moveTo(this.x + 10, this.y - 43);
            DrunkenSailor.crc2.lineTo(this.x - 80, this.y - 43);
            DrunkenSailor.crc2.closePath();
            DrunkenSailor.crc2.fill();
            DrunkenSailor.crc2.strokeStyle = "#4A1703"; //"transparent"
            DrunkenSailor.crc2.stroke();
        }
        move() {
            this.x += 0;
            this.y -= 0;
        }
    }
    DrunkenSailor.Boat = Boat;
})(DrunkenSailor || (DrunkenSailor = {})); //namespace
//# sourceMappingURL=Boat.js.map