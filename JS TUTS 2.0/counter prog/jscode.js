let counterValue = 0;
const btnInc = document.querySelectorAll(".btn")
console.log(btnInc)

const value = document.querySelector("#value");

btnInc.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const list = e.currentTarget.classList;
        if (list.contains("btn-success")) {
            counterValue++;

        } else if (list.contains("btn-danger")) {
            counterValue--;

        } else if (list.contains("btn-light")) {
            counterValue = 0;

        }
        if (counterValue > 0) {
            value.style.color = "green"
        }

        if (counterValue < 0) {
            value.style.color = "red"
        }

        if (counterValue === 0) {
            value.style.color = "black"
        }
        value.textContent = counterValue;
    });
})