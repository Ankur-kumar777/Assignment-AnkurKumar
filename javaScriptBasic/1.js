function displayDateTime() {
    let currentDate = new Date();

    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = daysOfWeek[currentDate.getDay()];

    let hours = currentDate.getHours();
    let suffix = (hours >= 12) ? "PM" : "AM";
    hours = (hours >= 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 12 : hours;
    
    let minutes = currentDate.getMinutes();
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    let seconds = currentDate.getSeconds();
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    console.log("Today is : " + dayOfWeek);
    console.log("Current time is : " + hours + ":" + minutes + " : " + seconds);
}

displayDateTime();
