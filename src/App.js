import React from "react";
import {
  GameDetailView,
  GameListView,
  Navbar,
  QueryBar
} from "./components/index.js";
import "./styles/App.css";
import { getGameDetail, getGameList } from "./services/games.js";

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

  getGameDetail = async gameID => {
    const data = await getGameDetail(gameID);
    const {
      name,
      id,
      description,
      metacritic,
      rating,
      released,
      background_image,
      website,
      parent_platforms,
      stores
    } = data;
    const clip = data.clip && data.clip.clip;

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
      stores,
      clip,
      showDetail: true
    });
  };

  handleGenreChange = event => {
    console.log(event.target.value);
    this.setState({ selectedGenre: event.target.value });
  };

  getGameList = async () => {
    const selectedGenre = this.state.selectedGenre;
    const filteredResults = await getGameList(selectedGenre);
    const nodes = filteredResults.map(result => {
      return this.createGamesListNode(result);
    });
    this.setState({
      gameListNodes: nodes,
      showDetail: false
    });
  };

  createGamesListNode = game => {
    const name = game.name;
    const id = game.id;
    const metacritic = game.metacritic;
    const rating = game.rating;
    const released = game.released;
    const icon = game.background_image;
    const parent_platforms = game.parent_platforms;
    const stores = game.stores;
    return (
      <GameListView
        name={name}
        id={id}
        metacritic={metacritic}
        rating={rating}
        released={released}
        icon={icon}
        parent_platforms={parent_platforms}
        stores={stores}
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
      stores,
      rating,
      released,
      showDetail,
      website
    } = this.state;

    return (
      <div className="App">
        <Navbar
          onClickList={() => this.getGameList()}
          onClickRandom={() => this.getGameDetail()}
        />
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
            stores={stores}
            clip={clip}
            hideGameDetail={this.hideGameDetail}
          />
        )}
      </div>
    );
  }
}

export default App;
