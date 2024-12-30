const timestamp = document.querySelector("#timestamp");
const startMenu = document.querySelector("#start-menu");
const startButton = document.querySelector("#start-button");

//display time
const timeStamp = () => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let date = time.getDate();

  let am = "AM";

  if (hour >= 12) {
    am = "PM";
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  timestamp.innerHTML = `${hour}:${minute} ${am}`;
  //   timestamp.innerHTML = `${date}`;
};
timeStamp();

//toggle start menu
startButton.addEventListener("click", (ev) => {
  console.log("hello");
  ev.preventDefault();
  if (startMenu.style.display === "none") {
    startMenu.style.display = "block";
  } else {
    startMenu.style.display = "none";
  }
});
