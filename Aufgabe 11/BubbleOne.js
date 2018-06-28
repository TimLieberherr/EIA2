/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 23.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe11;
(function (Aufgabe11) {
    class BubbleOne extends Aufgabe11.MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * (350 - 265) + 300;
            this.y = Math.random() * 400;
            this.scale = Math.random() * 8;
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 400;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.scale, 2, 3 * Math.PI, true);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#A9D0F5";
            Aufgabe11.crc2.strokeStyle = "#A9D0F5";
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.BubbleOne = BubbleOne;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=BubbleOne.js.map