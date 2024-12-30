const timestamp = document.querySelector("#timestamp");

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

  timestamp.innerHTML = `${hour}:${minute} ${am}`;
  //   timestamp.innerHTML = `${date}`;
};

timeStamp();
