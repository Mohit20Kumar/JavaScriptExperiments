const myColors = ["red", "blue", "purple", "green", "yellow"]
const btnmy = document.getElementById("btn");
const myColor = document.querySelector(".color")

btnmy.addEventListener("click", changeColor);

function changeColor() {
    console.log("yoyoyoyoyo")
    let randomNumber = Math.floor(Math.random() * myColors.length);
    // console.log(randomNumber)
    document.body.style.backgroundColor = myColors[randomNumber];

    myColor.textContent = ` ${myColors[randomNumber]}`
    myColor.style.color = myColors[randomNumber]
    myColor.style.textShadow = `2px 2px black`


}