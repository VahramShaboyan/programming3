function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('delete');
    var arrp = [];

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function deleteMessages(evt) {
        socket.emit("uzum em jnjem");

    }
    del.onclick = deleteMessages;
    del.onclick = deleteTags;

    function handleMessage(msg) {
        var p = document.createElement('p');
        var att = document.createAttribute("class");
        
        arrp.push(p);
        att.value = "democlass";
        p.setAttributeNode(att);
        document.getElementById("pdiv").appendChild(p);
        p.innerText = msg;
        arrp.appendChild(p);
        input.value = "";
        
    }

    socket.on('display message', handleMessage);
    socket.on('"dzer tagery jnjeq"', deleteTags);


    function deleteTags(){
        console.log("deleted");
        var chatDiv = document.getElementById("pdiv");
        var fc = chatDiv.firstChild;
        console.log(fc);
        while (fc) {
            chatDiv.removeChild(fc);
            fc = chatDiv.firstChild;
            
        }
        
    }
} // main closing bracket

window.onload = main;