import { createElement , createImage } from "./dom.js";
import data from "./menu.json" with {type: "json"};
import { getMusic , renderMusicTracks } from "./fetch.js";
// import { fetchWebApi, getTopTracks } from "./fetch.js";


const timestamp = document.querySelector("#timestamp");
const startMenu = document.querySelector("#start-menu");
const startButton = document.querySelector("#start-button");
const mainMenu = document.querySelector("#main");
const desktopMenu = document.querySelector("#desktop-menu");
const menuModal = document.querySelector("#menu-modal");
const nothing = document.querySelector("#button");
const close = document.querySelector(".close");
const modalTitle = document.querySelector(".modal-title");
const modalHeader = document.querySelector(".modal-header");
const modalImg = document.querySelector("#modal-img");
const modalBody = document.querySelector(".modal-body");
let desktopPar;
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


const reset = () => {
menuModal.reset();
};

const startApp = () => {

 for ( let i = 0 ; i < data.icons.length ;i++) {
  const desktopDiv = document.createElement("div");
  desktopDiv.classList.add("desktop-menu");
  desktopMenu.appendChild(desktopDiv);  
   const desktopImg = data.icons[i].img;
  desktopPar =data.icons[i].name;
  console.log(desktopPar);
  createImage(desktopImg, desktopDiv);
  createElement("p" , desktopPar, desktopDiv);


  desktopDiv.addEventListener("click", (ev) => {
    ev.preventDefault();
    menuModal.style.display = "block";
    createImage(desktopImg, modalHeader);  
    
    createElement("p" , desktopPar, modalHeader);
    if (modalBody.innerHTML === "") { 
      
      renderMusicTracks();
    } 


  });
  
 
  reset();

  
  const startMenuDiv = document.createElement("div");
  startMenuDiv.classList.add("start-menu");
  startMenu.appendChild(startMenuDiv);  

  const startMenuImg = data.icons[i].img;
  const startMenuPar = data.icons[i].name;
  createImage(startMenuImg,startMenuDiv,"start-menu__icons");
  createElement("p",startMenuPar,startMenuDiv );
  

}

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





  //close my modal
  close.addEventListener("click" , (ev) => {
    ev.preventDefault();
    menuModal.style.display = "none";
    reset();



  });




// console.log(renderMusicTracks());

nothing.addEventListener("click" , (ev) => {
  ev.preventDefault();
  renderMusicTracks();

});

startApp();