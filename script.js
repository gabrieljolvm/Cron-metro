let ms = document.querySelector("#milliSeconds");
let sec = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
const init = document.querySelector("#init");
const pause = document.querySelector("#pause");
const clear = document.querySelector("#clear");

let cron

function timer() {
    ms.textContent++
    format(ms)
    if (ms.textContent > 99) {
        ms.textContent = 0;
        sec.textContent++;
        format(sec);
        format(ms);

    }
    if (sec.textContent > 59) {
        sec.textContent = 0;
        minutes.textContent++;
        format(sec);
        format(minutes);
    }
    if (minutes > 59) {
        clearInterval(timer);
    }

}

function format(e) {
    e.textContent < 10 ? e.textContent = `0${e.textContent}` : e.textContent;
}

init.addEventListener("click", () => {
    pauseF();
    cron = setInterval(timer, 10);
})

function pauseF() {
    clearInterval(cron);
}

pause.addEventListener("click", () => {
    pauseF();
})

clear.addEventListener("click",()=>{
    pauseF();
    document.querySelectorAll("#milliSeconds,#seconds,#minutes").forEach(e=>{
        e.textContent = "00"
    })
})