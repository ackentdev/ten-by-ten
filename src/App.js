import React from 'react';
import Game from './Components/Game'
import './App.css';
import axios from 'axios';

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

  getGames = async () => {
    const res = await axios.get('/api/games')
    this.setState({
      games: res.data 
    })
  }

  render(){
    const { games } = this.state
    const mappedGames = games.map( game => {
     return <div key={`game-id-${game.id}`}>
        <Game title={game.title}/>
      </div>
    })
    return <div>
      {mappedGames}
    </div>
  }
}

export default App;
