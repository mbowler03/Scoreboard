import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends Component {
 
 state = {
   players: [
    {
      name: "Matt",
      score: 0,
      id: 1
    },
    {
      name: "Ingrid",
      score: 0,
      id: 2
    },
    {
      name: "Charlie",
      score: 0,
      id: 3
    },
    {
      name: "Finn",
      score: 0,
      id: 4
    }
    ]
 }
//player id counter
prevPlayerId = 4;
 handleScoreChange = (index, delta) => {
  this.setState( prevState => ({
    score: prevState.players[index].score += delta
  }));
}
handleAddPlayer = (name) => {
  this.setState( prevState => {
    return {
    players:[
      ...prevState.players,
    {
    name: name,
    score: 0,
    id: this.prevPlayerId +=1
}
]
    };
  })
}
 handleRemovePlayer = (id) => {
this.setState( prevState => {
  return {
  players: prevState.players.filter( p => p.id !== id )
  };
});
 }
 getHighScore = () => {
   const scores = this.state.players.map ( p => p.score );
   const highScore = Math.max(...scores);
   if (highScore) {
     return highScore;
   }
   return null;
 }
  render() {
    const highScore = this.getHighScore();

  return (
    < div className='scoreboard'>
      <Header title='Scoreboard' 
      players={this.state.players}
      />
      {/* Players List */}
    {this.state.players.map( (player, index) => 
    <Player 
    name={player.name} 
    score={player.score}
    id={player.id}
    key={player.id.toString()}
    index={index}
    changeScore={this.handleScoreChange}
    removePlayer={this.handleRemovePlayer}
    isHighScore={highScore === player.score}
    />
    )}
    <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    
  );
}
}
export default App;
