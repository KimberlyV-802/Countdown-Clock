let countDown = new Date("November 29, 2019 12:00:00").getTimer();

let CountDown = setInterval(function() {
    let timeLeft = countDown().getTimer();
    let t = endDate - now;
    
    if (t >=0 ) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer-days").innerHTML = days + "<span class='label'>DAYS</span>";

        document.getElementById("timer-hours").innerHTML= ("0" + hours).slice(-2) + "<span class='label'>HR(S)</span>";

        document.getElementById("timer-mins").innterHTML= ("0" + mins).slice(-2) + "<span class='label">mins(S)</span>";
        
        document.getElementById("timer-secs").innerHTML= ("0" + secs).slice(-2) + "<span class='label>SEC(S)</span>";
     }
    else {
        document.getElementById("timer").innerHTML = "The countdown is over!";
        }
}, 1000);

