let stage = 0;

function handleYes() {
    document.getElementById("content").innerHTML = "<img src='milkandmocha-kissing.gif' alt='Cute bears'><p>Yay! You're my waifu now! 🥰🐻💖</p>";
}

function handleNo() {
    stage++;
    let gif = document.getElementById("gif");
    let question = document.getElementById("question");
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");
    
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

function moveNoButton() {
    let noButton = document.getElementById("no");
    setInterval(() => {
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }, 500);
}