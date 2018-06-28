/*  Aufgabe: Canvas-Seaworld
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 23.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace Aufgabe11 {
    export class BubbleOne extends MovingObjects {
        scale: number;

        constructor() {
            super();
            this.setRandomPosition();    
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * (350 - 265) + 300;
            this.y = Math.random() * 400;
            this.scale = Math.random() * 8;    
        }
        
        move(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 400;
            }
        }

        draw(): void {
            crc2.beginPath();

            crc2.arc(this.x, this.y, this.scale, 2, 3 * Math.PI, true);
            crc2.stroke();
            crc2.fillStyle = "#A9D0F5";
            crc2.strokeStyle = "#A9D0F5";
            crc2.fill();
        }
    }
}