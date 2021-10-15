const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnmy = document.getElementById("btn");
const myColor = document.querySelector(".color")

btnmy.addEventListener("click", changeColorHex);

function changeColorHex() {

    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)]

    }

    document.body.style.backgroundColor = hexColor;
    myColor.textContent = ` ${hexColor}`
    myColor.style.textShadow = `2px 2px black`
    myColor.style.color = hexColor

}