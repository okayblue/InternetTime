const timeDisplay = document.querySelector('.time');

function getInternetTime() {
    let date = new Date();
    date.setHours(date.getHours() + 1)
    let hour = date.getUTCHours(); 
    let minute = date.getUTCMinutes();
    let second = date.getUTCSeconds();
    let internetTime = ((3600 * (hour)) + (60 * minute) + second) / 86.4;
    timeDisplay.textContent = "@" + internetTime.toFixed(2);
}

setInterval(getInternetTime, 10);