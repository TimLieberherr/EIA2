var DrunkenSailor;
(function (DrunkenSailor) {
    class Triangle extends DrunkenSailor.Square {
        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        }
        draw() {
            DrunkenSailor.crc2.fillStyle = this.color;
            DrunkenSailor.crc2.beginPath();
            DrunkenSailor.crc2.moveTo(this.x, this.y);
            DrunkenSailor.crc2.lineTo(this.x + 28, this.y - 50);
            DrunkenSailor.crc2.lineTo(this.x + 56, this.y);
            DrunkenSailor.crc2.closePath();
            DrunkenSailor.crc2.fill();
            DrunkenSailor.crc2.strokeStyle = "transparent";
            DrunkenSailor.crc2.stroke();
        }
        setStartPosition() {
            this.x = DrunkenSailor.canvas.width + 50;
            this.y = 560;
        }
        setRandomSpawnPoint() {
            //            this.x = Math.random() * ((crc2.canvas.width + 700) - (crc2.canvas.width + 50)) + (crc2.canvas.width + 50);
            //            this.y = 560;
        }
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
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
    }
    DrunkenSailor.Triangle = Triangle; // class   
})(DrunkenSailor || (DrunkenSailor = {})); // closing namespace 
//# sourceMappingURL=Triangle.js.map