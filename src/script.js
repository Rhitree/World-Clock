function updateTime() {

//User's local timezone
let localElement = document.querySelector("#local");
if (localElement) 
    {
let localDateElement = localElement.querySelector(".date");
let localTimeElement = localElement.querySelector(".time");
let localTime= moment();

localTimeElement.innerHTML = localTime.format("h:mm:ss [<small>] A [</small>]");
localDateElement.innerHTML = moment().format("MMMM Do YYYY");
    }

//Johannesburg
let johannesburgElement = document.querySelector(`#johannesburg`);
let johannesburgDateElement = johannesburgElement.querySelector(`.date`);
let johannesburgTimeElement = johannesburgElement.querySelector(`.time`);
let johannesburgTime = moment().tz(`Africa/Johannesburg`);

johannesburgDateElement.innerHTML = johannesburgTime.format(`MMMM Do YYYY`);
johannesburgTimeElement.innerHTML = johannesburgTime.format(`h:mm:ss [<small>]A[</small>]`
);

//Dhaka
let dhakaElement = document.querySelector(`#dhaka`);
let dhakaDateElement = dhakaElement.querySelector(`.date`);
let dhakaTimeElement = dhakaElement.querySelector(`.time`);
let dhakaTime = moment().tz(`Asia/dhaka`);

dhakaDateElement.innerHTML = dhakaTime.format(`MMMM Do YYYY`);
dhakaTimeElement.innerHTML = dhakaTime.format(`h:mm:ss [<small>]A[</small>]`
);
};

updateTime();
setInterval(updateTime, 1000);