/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 23.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe10 {
    export class BubblesOne {
        x: number;
        y: number;
        scale: number;

        moveBubbles(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 400;
            }
        }

        drawBubbles(): void {
            crc2.beginPath();

            crc2.arc(this.x, this.y, this.scale, 2, 3 * Math.PI, true);
            crc2.stroke();
            crc2.fillStyle = "#A9D0F5";
            crc2.strokeStyle = "#A9D0F5";
            crc2.fill();
        }
    }
    
    export class BubblesTwo {
        x: number;
        y: number;
        scale: number;

        moveBubbles(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 350;
            }
        }

        drawBubbles(): void {
            crc2.beginPath();

            crc2.arc(this.x, this.y, this.scale, 2, 3 * Math.PI, true);
            crc2.stroke();
            crc2.fillStyle = "#A9D0F5";
            crc2.strokeStyle = "#A9D0F5";
            crc2.fill();
        }
    }
}