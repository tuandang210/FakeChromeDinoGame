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

var audio = new Audio("Phao - 2 Phut Hon.mp3");
function play() {
    audio.play();
}
function stopMusic(){
    audio.pause();
}


tutorial.addEventListener("click", () => {
    alert("Press 'Space' key to start game." + "\nPress 'ArrowUp' key to let the T-rex jump. " +
        "\nPress the 'Music' button to play music." + "\nDouble click to stop music." +
        "\nAnd the 'Secret' button is useless @@!")
});
secret.addEventListener("click", () => {
    alert("This button is useless."+"\nTold you already.")
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


    if (dinoBottom <= 90 && blockLeft >= 0 && blockLeft <= 130) {


        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 100);
