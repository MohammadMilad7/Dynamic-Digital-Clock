let section = document.querySelector("section"),
 icons = document.querySelector(".icons");

 icons.onclick = () =>{
    section.classList.toggle("dark");
 }

//  create a Function and calling it in every second 

setInterval(() => {
    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; 
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 12 : hour;

    // adding 0 to the all number thats less than 10

    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    hour = hour < 10 ? "0" + hour : hour;


    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;
},1000); // 1000 milliseconds = 1s