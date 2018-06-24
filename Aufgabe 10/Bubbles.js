/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 23.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe10;
(function (Aufgabe10) {
    class BubblesOne {
        moveBubbles() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 400;
            }
        }
        drawBubbles() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.scale, 2, 3 * Math.PI, true);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "#A9D0F5";
            Aufgabe10.crc2.strokeStyle = "#A9D0F5";
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.BubblesOne = BubblesOne;
    class BubblesTwo {
        moveBubbles() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 350;
            }
        }
        drawBubbles() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.scale, 2, 3 * Math.PI, true);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "#A9D0F5";
            Aufgabe10.crc2.strokeStyle = "#A9D0F5";
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.BubblesTwo = BubblesTwo;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Bubbles.js.map