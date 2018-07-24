var DrunkenSailor;
(function (DrunkenSailor) {
    class Square extends DrunkenSailor.Dot {
        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        }
        draw() {
            //
        }
        move() {
            this.x -= 3;
            this.y += 0;
            if (this.x < -50) {
                this.x = DrunkenSailor.canvas.width + 50;
            }
        }
        setStartPosition() {
            this.x = DrunkenSailor.canvas.width + 0;
            this.y = 510;
        }
        setRandomSpawnPoint() {
            //            this.x = Math.random() * ((crc2.canvas.width + 700) - (crc2.canvas.width + 50)) + (crc2.canvas.width + 50);
            //            this.y = 510;   
        }
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#f9b836";
                    break;
                case 1:
                    this.color = "#b2cc4d";
                    break;
                case 2:
                    this.color = "#b7505e";
            } // switch   
        } // setRandomColor
    }
    DrunkenSailor.Square = Square; // class   
})(DrunkenSailor || (DrunkenSailor = {})); // closing namespace
//# sourceMappingURL=Square.js.map