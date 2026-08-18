let userName = "";

try {
    userName = prompt("Lütfen adınızı giriniz:");
} catch (e) {
    
    userName = "Senanur";
}

let nameElement = document.getElementById("myName");
if (nameElement) {
    nameElement.innerText = (userName && userName.trim() !== "") ? userName : "Misafir";
}

function showTime() {
    const now = new Date();
    
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    
    const days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ];
    let day = days[now.getDay()];
    
    let clockElement = document.getElementById("myClock");
    if (clockElement) {
        clockElement.innerText = `${hours}:${minutes}:${seconds} ${day}`;
    }
}

showTime();
setInterval(showTime, 1000);