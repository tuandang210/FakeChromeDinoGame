let container = document.getElementById("container");
let dino = document.getElementById("dino");
let block = document.getElementById("block");
let road = document.getElementById("road");
let cloud = document.getElementById("cloud");
let score = document.getElementById("score");
let gameOver = document.getElementById("gameOver");
let tutorial = document.getElementById("tutorial");
let secret = document.getElementById("secret");

let interval = null;
let playerScore = 0;

function play() {
    var audio = new Audio("origin.mp3");
    audio.play();
}
tutorial.addEventListener("click", () => {
    alert("\nPress 'Space' key to start game." + "\n\nPress 'ArrowUp' key to let the T-rex jump. " +
        "\n\nPress the 'Music' button to play music." + "\n\nAnd the 'Secret' button is useless @@!")
});
secret.addEventListener("click", () => {
    alert("\nThis is useless."+"\n\nTold you already.")
})
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;

}


//start Game
window.addEventListener("keydown", (start) => {

    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 20s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 100);
    }
});


//jump
window.addEventListener("keydown", (play) => {


    if (play.key == "ArrowUp")
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");


            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
});

//Game Over
let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    console.log(dinoBottom)


    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));


    if (dinoBottom <= 70 && blockLeft >= -20 && blockLeft <= 100) {


        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 100);
