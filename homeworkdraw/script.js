function main() {
    var socket = io.connect('http://localhost:3000');

    function setup() {
        createCanvas(800,800);
        background("#BCD8FF");
        fill("red");
    }

    function mouseDragged(){
        var obj_cordinats = {
            x: mouseX,
            y: mouseY
        }
        socket.emit("send", obj_cordinats);
    }

    function draw() {
        socket.on("send message", function(data){
            
        }); 
    } 

}
window.onload = main;