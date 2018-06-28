/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 23.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = Math.random() * Aufgabe11.crc2.canvas.height - 100;
        }
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -150) {
                this.x = Aufgabe11.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe11.crc2.canvas.height - 100;
                this.x -= 2;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            Aufgabe11.crc2.lineTo(this.x + 80, this.y - 10);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            Aufgabe11.crc2.fillStyle = "#FE9A2E";
            Aufgabe11.crc2.strokeStyle = "#FE9A2E";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Fish.js.map