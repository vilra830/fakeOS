import { createElement , createImage } from "./dom.js";
import data from "./menu.json" with {type: "json"};
import { getMusic } from "./fetchMusic.js";


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
const modalBody = document.querySelector(".modal-body");
const modalImg = document.querySelector("modal-img");

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

  // desktopDiv.addEventListener("click", (ev) => {
  //   ev.preventDefault();
  //   console.log("This DIV is clickable");
  //   menuModal.style.display = "block";
  //   menuModal.innerHTML  = `<div id="modal-div"> ${desktopDiv.innerText} </div>`;

  // });
  
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
  

  // menuModal.style.display = "none";
  // startMenuDiv.addEventListener("click", (ev) => {

  //   ev.preventDefault();
  //   console.log("This DIV is clickable");
  //   // menuModal.style.display = "none";
  //   if(menuModal.style.display === "none") {

  //     menuModal.style.display = "block";
  //   } else {

  //     menuModal.style.display = "none";
  //   }

    
  // });

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


    
 const music = await getMusic();
 nothing.addEventListener("click" , (ev) => {
  menuModal.style.display = "block";
  
   
  // const divModal = document.createElement("div");
  // menuModal.appendChild(divModal);
  for(let i = 0 ; i < 10 ; i++){
  const thumb = music.track_details[i].thumb;
  const artistName = music.track_details[i].artist;
  const songName = music.track_details[i].song_name;
  console.log(thumb);

  const musicImg = document.createElement("img");
  musicImg.src = thumb;
  const divBox = document.createElement("div");
  divBox.classList.add("music-item");
  modalBody.appendChild(divBox);
  // divModal.appendChild(musicImg);
    createImage(musicImg.src, divBox, "modal-img");  
    createElement("p" , artistName, divBox, "modal-p");
    createElement("p" , songName, divBox, "modal-p");
  }

  });


  //close my modal
  close.addEventListener("click" , (ev) => {
    ev.preventDefault;
    menuModal.style.display = "none";

  });




