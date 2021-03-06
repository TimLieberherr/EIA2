/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    // Square Klasse
    class OtherStuff extends DrunkenSailor.EnemyClass {
        // constructor
        constructor() {
            super();
            this.setRandomColor();
            this.setStartPosition();
            this.setRandomSpawnPoint();
        } // constructor
        // draw  
        draw() {
            DrunkenSailor.crc2.beginPath();
            //Rumpf
            DrunkenSailor.crc2.moveTo(this.x + 30, this.y - 43);
            DrunkenSailor.crc2.lineTo(this.x + 30, this.y + 10);
            DrunkenSailor.crc2.lineTo(this.x - 80, this.y + 10);
            DrunkenSailor.crc2.lineTo(this.x - 120, this.y - 30);
            //Spitze
            DrunkenSailor.crc2.lineTo(this.x - 145, this.y - 30);
            DrunkenSailor.crc2.lineTo(this.x - 145, this.y - 32);
            //Höcker
            DrunkenSailor.crc2.lineTo(this.x - 10, this.y - 32);
            DrunkenSailor.crc2.lineTo(this.x + 10, this.y - 43);
            //Mast 1
            DrunkenSailor.crc2.moveTo(this.x - 30, this.y - 32);
            DrunkenSailor.crc2.lineTo(this.x - 30, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x - 28, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x - 28, this.y - 32);
            //Segel 1
            DrunkenSailor.crc2.moveTo(this.x - 29, this.y - 60);
            DrunkenSailor.crc2.lineTo(this.x + 10, this.y - 60);
            DrunkenSailor.crc2.lineTo(this.x - 29, this.y - 140);
            //Mast 1
            DrunkenSailor.crc2.moveTo(this.x - 70, this.y - 32);
            DrunkenSailor.crc2.lineTo(this.x - 30, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x - 28, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x - 28, this.y - 32);
            //Segel 1
            DrunkenSailor.crc2.moveTo(this.x - 29, this.y - 60);
            DrunkenSailor.crc2.lineTo(this.x + 10, this.y - 60);
            DrunkenSailor.crc2.lineTo(this.x - 29, this.y - 140);
            DrunkenSailor.crc2.closePath();
            DrunkenSailor.crc2.fill();
        } // draw
        // Set Start Position
        setStartPosition() {
            this.x = DrunkenSailor.canvas.width - 20;
            this.y = 560;
        } // setStartPosition
        // set Random Spawn Point
        setRandomSpawnPoint() {
            // leer
        } //setRandomSpawnPoint
        // setRandomColor
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#878B33";
                    break;
                case 1:
                    this.color = "#792F79";
                    break;
                case 2:
                    this.color = "#8F2844";
            } // switch   
        } // setRandomColor
    }
    DrunkenSailor.OtherStuff = OtherStuff; // class   
})(DrunkenSailor || (DrunkenSailor = {})); // namespace
//# sourceMappingURL=Other.js.map