import { createElement, createImage } from "./dom.js";

export const getMusic = async () => {
  //by default fetch makes a GET request
  const token =
    "BQBb7U98WNf8eiLsu8dietKgugm2sLV5GdGy-8N1NdEwvTvr0tIH3V6GZwQcfMejvugHseETsv0u85ZgNIE5BRoIFnXExm1wOnguhLeVZbuCwbH2wDY";
  const url =
    "https://api.spotify.com/v1/artists/4LEiUm1SRbFMgfqnQTwUbQ/top-tracks";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const data = await fetch(url, options);
    const results = await data.json();
    // console.log(results);
    // console.log(results.track_details[0].thumb);
    return results;
  } catch (error) {
    console.error(error);
  }
};

console.log(getMusic());

export const renderMusicTracks = async () => {
  const modalBody = document.querySelector(".modal-body");
  const music = await getMusic();
  //  console.log(music.tracks);
  //  console.log(music.tracks[1].album.images[1].url);
  //  console.log(music.tracks[1].album.href);
  //  console.log(music.tracks[1].album.name);
  //  console.log(music.tracks[1].album.artists[0].name);

  // menuModal.style.display = "block";

  // const divModal = document.createElement("div");
  // menuModal.appendChild(divModal);

  for (let i = 0; i < music.tracks.length; i++) {
    const thumb = music.tracks[i].album.images[1].url;
    const artistName = music.tracks[i].album.artists[0].name;
    const songName = music.tracks[i].name;
    // console.log(thumb);

    const musicImg = document.createElement("img");
    musicImg.src = thumb;
    const divBox = document.createElement("div");
    divBox.classList.add("music-item");
    modalBody.appendChild(divBox);
    // divModal.appendChild(musicImg);
    createImage(musicImg.src, divBox, "modal-img");
    createElement("p", artistName, divBox, "modal-p");
    createElement("p", songName, divBox, "modal-p");
  }

  // });
};
