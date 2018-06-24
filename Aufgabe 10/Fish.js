/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 23.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Aufgabe10;
(function (Aufgabe10) {
    class Fish {
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -150) {
                this.x = Aufgabe10.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe10.crc2.canvas.height;
                this.x -= 2;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            Aufgabe10.crc2.lineTo(this.x + 80, this.y - 10);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            Aufgabe10.crc2.fillStyle = "#FE9A2E";
            Aufgabe10.crc2.strokeStyle = "#FE9A2E";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Fish = Fish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Fish.js.map