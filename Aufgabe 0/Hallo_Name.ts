/*
Name: Tim Lieberherr
Matrikel: (257969)
Datum: (25.03.18) Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/ 

function hallo() {
  var name = prompt("Hey, wie ist dein Name?", "");
    document.getElementById("Hallo_Name").innerHTML =
      "Hey " + name + ". Schön das du hier bist.";  
}
