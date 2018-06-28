var Vorbereitung;
(function (Vorbereitung) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 15;
    //let rects: Rect[] = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Vorbereitung.crc2 = canvas.getContext("2d");
        console.log(Vorbereitung.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new Vorbereitung.DavidStar("#ffbe1c");
            stars.push(star);
            let rect = new Vorbereitung.Rect("#00b6d6");
            stars.push(rect);
        }
        animate();
    }
    function insertNewObject(_event) {
        let randomObject = Math.floor(Math.random() * 3);
        let newPositionX = _event.clientX;
        let newPositonY = _event.clientY;
        switch (randomObject) {
            case 0:
                let star = new Vorbereitung.DavidStar("#4a5b77");
                star.x = newPositionX;
                star.y = newPositonY;
                stars.push(star);
                break;
            case 1:
                let rect = new Vorbereitung.Rect("#efa017");
                rect.x = newPositionX;
                rect.y = newPositonY;
                stars.push(rect);
                break;
            case 2:
                let blueDavidStar = new Vorbereitung.DavidStarBlue("#1adbce");
                blueDavidStar.x = newPositionX;
                blueDavidStar.y = newPositonY;
                stars.push(blueDavidStar);
                break;
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        Vorbereitung.crc2.clearRect(0, 0, Vorbereitung.crc2.canvas.width, Vorbereitung.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=Animation.js.map