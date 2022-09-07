const clockTitle = document.querySelector(".js-clock");

function dDay(){
    const cmDate = new Date('2022-12-25');
    const toDate = new Date()
    const difDate = cmDate - toDate;
    const days = Math.floor(difDate / (1000*60*60*24));
    const hours = Math.floor(difDate / (1000*60*60) % 24);
    const minutes = Math.floor(difDate / (1000*60) % 60);
    const second = Math.floor(difDate / 1000 % 60);

    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${second}s`
}

dDay();
setInterval(dDay,1000);



// function getClock() {
//     const date = new Date()
//     const hours = String(date.getHours()).padStart(2,"0");
//     const minutes = String(date.getMinutes()).padStart(2,"0");
//     const seconds = String(date.getSeconds()).padStart(2,"0");
//     clock.innerText = (`${hours}:${minutes}:${seconds}`);
    
// }
// getClock();
// setInterval(getClock,1000);