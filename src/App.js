import React from "react";
import { GameDetailView, GameListView, Navbar } from "./components/index.js";
import "./styles/App.css";
import { getGameDetail, getGameList } from "./services/games.js";
import backgroundTile from "./images/background.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false
    };
  }
  componentDidMount() {
    document.body.style = `background-image: url(${backgroundTile})`;
    this.getGameList();
  }

  getGameDetail = async gameID => {
    const data = await getGameDetail(gameID);
    const {
      name,
      slug,
      id,
      description,
      metacritic,
      rating,
      released,
      background_image,
      website,
      parent_platforms,
      stores,
      redirect
    } = data;
    const clip = data.clip && data.clip.clip;

    this.setState({
      name,
      slug,
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
      redirect,
      showDetail: true
    });

    if (redirect != null) {
      this.getGameDetail(slug);
    }
  };

  handleGenreChange = event => {
    // console.log(event.target.value);
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
    const {
      name,
      id,
      metacritic,
      rating,
      released,
      background_image: icon,
      parent_platforms,
      stores
    } = game;
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
      website,
      id
    } = this.state;

    return (
      <div className="App">
        <Navbar
          onClickList={() => this.getGameList()}
          onClickRandom={() => this.getGameDetail()}
          onClickMeh={() => this.getGameDetail(331560)}
        />
        {/* <QueryBar
          handleGenreChange={this.handleGenreChange}
          handleSearch={() => this.getGameList()}
        /> */}
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
            id={id}
            hideGameDetail={this.hideGameDetail}
          />
        )}
      </div>
    );
  }
}

export default App;
