/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    // Triangle Klasse
    class Triangle extends DrunkenSailor.Square {
        // constructor
        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        } // constructor
        // draw
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
        } // draw
        // setStartPosition
        setStartPosition() {
            this.x = DrunkenSailor.canvas.width + 50;
            this.y = 560;
        } // setStartPosition
        // setRandwomSpawnPoint
        setRandomSpawnPoint() {
            // leer
        } // setRandwomSpawnPoint
        // setRandwomColor
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
})(DrunkenSailor || (DrunkenSailor = {})); // namespace 
//# sourceMappingURL=Triangle.js.map