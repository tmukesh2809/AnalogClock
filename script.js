setInterval(() => {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    hourhand = 30*hours + mins/2;
    minhand = 6*mins;
    sechand = 6*secs;
    hr.style.transform = `rotate(${hourhand}deg)`;
    min.style.transform = `rotate(${minhand}deg)`;
    sec.style.transform = `rotate(${sechand}deg)`;

}, 1000);