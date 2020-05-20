import React from 'react';
import Game from './Components/Game'
import games from '../games'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      games: []
    }
  }


  componentDidMount(){
    this.getGames();
  }

  getGames = () => {
    this.setState({
      games: games
    })
  }

  render(){
    const mappedGames = this.state.games.map( game => <div key={`game-id-${game.id}`}>
      <Game/>
    </div>)
    return <div>
      {mappedGames}
    </div>
  }
}

export default App;
