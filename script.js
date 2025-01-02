import { createElement } from "./dom.js";
import data from "./menu.json" with {type: "json"};

const timestamp = document.querySelector("#timestamp");
const startMenu = document.querySelector("#start-menu");
const startButton = document.querySelector("#start-button");
const mainMenu = document.querySelector("#main");
const desktopMenu = document.querySelector("#desktop-menu");


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

for ( let i = 0 ; i < data.icons.length ;i++) {
  const desktopDiv = document.createElement("div");
  desktopDiv.classList.add("desktop-menu");
  desktopMenu.appendChild(desktopDiv);  
  const desktopImg = document.createElement("img");  
  desktopImg.src = data.icons[i].img;
  const desktopPar = document.createElement("p");
  desktopPar.innerText = data.icons[i].name;
  desktopDiv.appendChild(desktopImg);
  desktopDiv.appendChild(desktopPar);
  
  const startMenuDiv = document.createElement("div");
  startMenuDiv.classList.add("start-menu");
  startMenu.appendChild(startMenuDiv);  
  const startMenuImg = document.createElement("img");
  startMenuImg.classList.add("start-menu__icons")
  startMenuImg.src = data.icons[i].img;
  const startMenuPar = document.createElement("p");
  startMenuPar.innerText = data.icons[i].name;
  startMenuDiv.appendChild(startMenuImg);
  startMenuDiv.appendChild(startMenuPar);
  
  
  
  
  }

//toggle start menu
startMenu.style.display = "none";
startButton.addEventListener("click", (ev) => {
  console.log("hello");
  ev.preventDefault();
  if (startMenu.style.display === "none") {
    startMenu.style.display = "block";
  } else {
    startMenu.style.display = "none";
  }
});



console.log(data);
console.log(Object.entries(data.icons[1]));
console.log(data.icons[1].name);
console.log(data.length);

// const div = document.createElement("div");
// div.classList.add("desktop-menu");
// mainMenu.appendChild(div);  


    
