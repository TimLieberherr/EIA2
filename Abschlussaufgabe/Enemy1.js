/*  Aufgabe: Abschlussaufgabe - Drunken Sailor
    Name: Tim Lieberherr
    Matrikel: 257969
    Datum: 31.07.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var DrunkenSailor;
(function (DrunkenSailor) {
    // Enemy 1 Klasse
    class Enemy1 extends DrunkenSailor.EnemyClass {
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
            DrunkenSailor.crc2.moveTo(this.x + 60, this.y - 43);
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
            DrunkenSailor.crc2.moveTo(this.x - 40, this.y - 32);
            DrunkenSailor.crc2.lineTo(this.x - 40, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x - 38, this.y - 140);
            DrunkenSailor.crc2.lineTo(this.x - 38, this.y - 32);
            //Segel 1
            DrunkenSailor.crc2.moveTo(this.x - 39, this.y - 60);
            DrunkenSailor.crc2.lineTo(this.x + 10, this.y - 60);
            DrunkenSailor.crc2.lineTo(this.x - 39, this.y - 140);
            DrunkenSailor.crc2.closePath();
            DrunkenSailor.crc2.fill();
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
                    this.color = "#1D1B7D";
                    break;
                case 1:
                    this.color = "#706A29";
                    break;
                case 2:
                    this.color = "#1F6F26";
            } // switch   
        } // setRandomColor
    }
    DrunkenSailor.Enemy1 = Enemy1; // class   
})(DrunkenSailor || (DrunkenSailor = {})); // namespace 
//# sourceMappingURL=Enemy1.js.map