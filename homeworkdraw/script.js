var socket = io.connect('http://localhost:3000');

function setup() {
    createCanvas(500, 500);
    background("#BCD8FF");

    r = random(255);
    g = random(255);
    b = random(255);
}
function mouseDragged() {
    socket.emit("send", [mouseX, mouseY, r,g,b]);
}
function main() {
    socket = io.connect('http://localhost:3000');

    socket.on("sendtoall", function (cords) {
        fill(cords[2], cords[3], cords[4])
        ellipse(cords[0], cords[1], 30, 30);
    });
}
 
window.onload = main;


