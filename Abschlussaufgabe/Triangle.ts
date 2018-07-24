namespace DrunkenSailor {
    export class Triangle extends Square {
        color: string;

        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 28, this.y - 50);
            crc2.lineTo(this.x + 56, this.y);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        }

        setStartPosition(): void {
            this.x = canvas.width + 50;
            this.y = 560;
        }

        setRandomSpawnPoint(): void {
//            this.x = Math.random() * ((crc2.canvas.width + 700) - (crc2.canvas.width + 50)) + (crc2.canvas.width + 50);
//            this.y = 560;
        }

        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#81871c";
                    break;
                case 1:
                    this.color = "#80648c";
                    break;
                case 2:
                    this.color = "#e5e042";
            } // switch   
        } // setRandomColor
    } // class   
} // closing namespace 