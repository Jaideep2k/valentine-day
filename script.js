let ws;
let stage = 0;

function handleYes() {
    let font = "Dancing Script";
    document.getElementById("content").innerHTML = "<img src='milkandmocha-kissing.gif' alt='Cute bears'> <img src='couple-love.gif' alt= 'Cute bears'>  <p id = 'question'> You are my waifu now🥰🐻💖";
    document.getElementById("question").style.fontFamily = "font-family: 'Dancing Script', cursive";

    
}
// Function to connect to ESP32 WebSocket
function connectToESP32() {
    ws = new WebSocket("ws://192.168.1.249:81");  // Replace with ESP32 IP address
    ws.onopen = () => console.log("Connected to ESP32 WebSocket");
    ws.onerror = (error) => console.error("WebSocket Error:", error);
}

// Function to send data to ESP32
function sendData(data) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(data);
        console.log(`Sent: ${data}`);
    } else {
        console.error("WebSocket is not connected.");
    }
}

function handleNo() {
    stage++;
    let gif = document.getElementById("gif");
    let question = document.getElementById("question");
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");

    // Send signal to ESP32 whegn "No" is clicked
    sendData("NO_CLICKED");

    if (stage === 1) {
        gif.src = "play-fight.gif";
        question.innerHTML = "Don't be so un-bear-able! 🐻 One date—I promise it'll be bear-y fun?";
        yesButton.style.fontSize = "2em";
        noButton.style.fontSize = "0.5em";
    } else if (stage === 2) {

        gif.src = "milk-and-mocha-bears-its-ok.gif";
        question.innerHTML = "Oof, you're really clawing at my feelings here 🐻... I promise it'll be pawsome!";
        yesButton.style.fontSize = "4em";
        noButton.style.fontSize = "0.25em";
    } else if (stage === 3) {
        gif.src = "milk-and-mocha-bears-its-ok.gif";
        question.innerHTML = "Try and say no again... I bearly think you can!";
        yesButton.style.fontSize = "8em";
        noButton.style.fontSize = "0.2em";
        noButton.style.position = "absolute";
        moveNoButton();
    }
}

// Call connectToESP32 when the page loads
window.onload = () => {
    connectToESP32();
};

function moveNoButton() {
    let noButton = document.getElementById("no");
    setInterval(() => {
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }, 500);
}

