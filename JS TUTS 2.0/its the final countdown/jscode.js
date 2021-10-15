const newYear = "1 Jan 2021";
const daysel = document.getElementById("p-days")
const hoursel = document.getElementById("p-hours")
const minutesel = document.getElementById("p-minutes")
const secondsel = document.getElementById("p-seconds")


function countDown() {
    newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;

    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysel.innerText = days
    hoursel.innerText = format(hours)
    minutesel.innerText = format(minutes)
    secondsel.innerText = format(seconds)

}

function format(time) {
    return time < 10 ? (`0${time}`) : time;

}

countDown();

setInterval(countDown, 1000);