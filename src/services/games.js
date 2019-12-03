import { request } from "./request";

export const getGameDetail = async gameID => {
  if (!gameID) {
    // var max = 364944; //Max results from RAWG.api

    var min = 3000; //More useable range of data
    var max = 3500; //Many games have missing values

    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    gameID = random.toString();
  }

  const url = "https://api.rawg.io/api/games/" + gameID; //Random Result
  // const url = "https://api.rawg.io/api/games/3498"; //GTA5
  // const url = "https://api.rawg.io/api/games/3328"; //The Witcher 3

  const responseText = await request(url);
  return JSON.parse(responseText);
};

export const getGameList = async selectedGenre => {
  let url = "https://api.rawg.io/api/games?page_size=40";
  if (selectedGenre) {
    url = url + "&genres=" + selectedGenre;
  }
  const responseText = await request(url);
  const data = JSON.parse(responseText);
  const results = data.results;
  const filteredResults = results.filter(result => {
    if (result.clip) {
      return true;
    } else {
      return false;
    }
  });
  return filteredResults;
};
