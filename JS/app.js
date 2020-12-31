// function timer(){
//     console.log("running")
// }

// setInterval(timer,1000)

// function timeOut(){
//     console.log("running")

// }

// setTimeout(timeOut,3000)

// var count = 0;
// var interval;

// function timer(){
//      count++
//      console.log(count)
// }

// interval = setInterval(timer, 1000)

// setTimeout(function(){
//     clearInterval(interval)

// },5000)


var min = 0;
var sec = 0;
var msec = 0;
var intrval;
var minId = document.getElementById("min")
var secId = document.getElementById("sec")
var msecId = document.getElementById("msec")

function timer() {
    msec++
    msecId.innerHTML ="0"+ msec+`<sub>ms</sub>`;
    if(msec >9){
        msecId.innerHTML =""+ msec+`<sub>ms</sub>`;
    }if (msec >= 99) {
        msec = 0;
        sec++
        secId.innerHTML ="0"+ sec+`<sub>S</sub>`;
        if (sec > 9) {
            secId.innerHTML = "" + sec+`<sub>S</sub>`;
        }
    } else if (sec >= 59) {
        min++
        sec = 0;
        minId.innerHTML = "0" + min+`<sub>M</sub>`;
        if (min > 9) {
            minId.innerHTML = "" + min+`<sub>M</sub>`;
        }
    }
}

function start() {
    interval = setInterval(timer, 10)
    document.getElementById("btn").disabled = true;
}

function pause() {
    clearInterval(interval)
    document.getElementById("btn").disabled = false;
    history()
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minId.innerHTML = "0" + min+`<sub>M</sub>`;
    secId.innerHTML = "0" + sec+`<sub>S</sub>`;
    msecId.innerHTML = "0" + msec+`<sub>ms</sub>`;
    pause();
}

function history() {
    document.getElementById("p").innerHTML = "MINUTES: " + min + "" + " SECONDS: " + sec + " " + " MILI SECONDS: " + msec;
}

// function history1(v){
//     var history = document.getElementById("history")
//     para = document.createElement("p")
//     data = v;
//     para.innerText = data;
//     history.appendChild(para)

// }