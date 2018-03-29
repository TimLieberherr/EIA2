/*
Name: Tim Lieberherr
Matrikel: (257969)
Datum: (25.03.18) Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

function hallo(): void {
    var hey: string = prompt("Hey, wie ist dein Name?", "");
    var container: HTMLElement = document.getElementById("Hallo_Name");
    container.innerHTML = "Hey " + hey + ". Schön das du hier bist.";
}
