var Vorbereitung;
(function (Vorbereitung) {
    class DavidStarBlue extends Vorbereitung.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += 2;
            this.y -= 1;
        }
    }
    Vorbereitung.DavidStarBlue = DavidStarBlue;
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=BlueDavidStar.js.map