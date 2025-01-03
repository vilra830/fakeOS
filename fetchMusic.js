export const getMusic = async () => {
  //by default fetch makes a GET request
  const url =
    "https://spotify117.p.rapidapi.com/spotify_playlist/?url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F3nS8d7ekVjFLM4jVyqbDGY";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ac1265bd95mshf2db060cffb1279p1c2536jsn02fe0e58790c",
      "x-rapidapi-host": "spotify117.p.rapidapi.com",
    },
  };

  try {
    const data = await fetch(url, options);
    const results = await data.json();
    console.log(results);
    console.log(results.track_details[0].thumb);
    return results;
  } catch (error) {
    console.error(error);
  }
};

console.log(getMusic());

// console.log(getRandomUser());
// getMusic().then(console.log);

// const button = document.querySelector("button");
// button.addEventListener("click", async () => {
//   const randomUser = await getRandomUser();
//   console.log(randomUser, "random user");
//   const firstName = randomUser.name.first;
//   const lastName = randomUser.name.last;
//   console.log(firstName, " ", lastName);
//   document.querySelector.h3.innerText = `${firstName} ${lastName}`;
// });
