import React from "react";
import {
  GameDetailView,
  GameListView,
  Navbar,
  QueryBar
} from "./components/index.js";
// import { Navbar } from "./components/Navbar.js";
// import { GameDetailView } from "./components/GameDetailView.js";
// import { GameListView } from "./components/GameListView.js";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false
    };
  }
  componentDidMount() {
    this.getGameList();
  }

  getGameDetail = gameID => {
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

    function httpGetAsync(theUrl, callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp.responseText);
      };
      xmlHttp.open("GET", theUrl, true); // true for asynchronous
      xmlHttp.send(null);
    }

    httpGetAsync(url, text => {
      const data = JSON.parse(text);
      const name = data.name;
      const id = data.id;
      const description = data.description;
      const metacritic = data.metacritic;
      const rating = data.rating;
      const released = data.released;
      const background_image = data.background_image;
      const website = data.website;
      const parent_platforms = data.parent_platforms;
      const clip = data.clip && data.clip.clip;
      console.log(data);

      this.setState({
        name,
        id,
        description,
        metacritic,
        rating,
        released,
        background_image,
        website,
        parent_platforms,
        clip,
        showDetail: true
      });
    });
  };

  handleGenreChange = event => {
    console.log(event.target.value);
    this.setState({ selectedGenre: event.target.value });
  };

  getGameList = () => {
    let url = "https://api.rawg.io/api/games?page_size=40";
    const selectedGenre = this.state.selectedGenre;
    if (selectedGenre) {
      url = url + "&genres=" + selectedGenre;
    }

    function httpGetAsync(theUrl, callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp.responseText);
      };
      xmlHttp.open("GET", theUrl, true); // true for asynchronous
      xmlHttp.send(null);
    }
    console.log(url);

    httpGetAsync(url, response => {
      const data = JSON.parse(response);
      console.log(data);
      const results = data.results;
      const filteredResults = data.results.filter(result => {
        if (result.clip) {
          return true;
        } else {
          return false;
        }
      });
      const nodes = filteredResults.map(result => {
        return this.createGamesListNode(result);
      });
      this.setState({
        gameListNodes: nodes,
        showDetail: false
      });
    });
  };

  createGamesListNode = game => {
    const name = game.name;
    const id = game.id;
    const metacritic = game.metacritic;
    const rating = game.rating;
    const released = game.released;
    const icon = game.background_image;
    const website = game.website;
    const parent_platforms = game.parent_platforms;
    return (
      <GameListView
        name={name}
        id={id}
        metacritic={metacritic}
        rating={rating}
        released={released}
        icon={icon}
        parent_platforms={parent_platforms}
        onClick={() => this.getGameDetail(id)}
      />
    );
  };

  showGameDetail = id => {
    console.log("game clicked", id);
  };

  hideGameDetail = () => {
    this.setState({ showDetail: false });
  };

  render() {
    const {
      background_image,
      clip,
      description,
      gameListNodes,
      metacritic,
      name,
      parent_platforms,
      rating,
      released,
      showDetail,
      website
    } = this.state;

    return (
      <div className="App">
        <Navbar onClickRandom={() => this.getGameDetail()} />
        <QueryBar
          handleGenreChange={this.handleGenreChange}
          handleSearch={() => this.getGameList()}
        />
        {!showDetail && <div className="List-nodes">{gameListNodes}</div>}
        {showDetail && (
          <GameDetailView
            name={name}
            description={description}
            metacritic={metacritic}
            rating={rating}
            released={released}
            background_image={background_image}
            website={website}
            parent_platforms={parent_platforms}
            clip={clip}
            hideGameDetail={this.hideGameDetail}
          />
        )}
      </div>
    );
  }
}

export default App;
