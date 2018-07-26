/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    // Square Klasse
    class Square extends DrunkenSailor.Dot {
        // Constructor
        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        } // Constructor
        // Draw
        draw() {
            //
        } // Draw
        // Move
        move() {
            this.x -= 3;
            this.y += 0;
            if (this.x < -50) {
                this.x = DrunkenSailor.canvas.width + 50;
            }
        } // Move
        // setStartPosition
        setStartPosition() {
            this.x = DrunkenSailor.canvas.width + 0;
            this.y = 510;
        } // setStartPosition
        // setRandomSpawnPoint
        setRandomSpawnPoint() {
            //
        } // setRandomSpawnPoint
        // setRandomColor
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