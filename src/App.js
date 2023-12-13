import React, {Component} from 'react';
import './App.css';
import Mycars from './components/Mycars';

class App extends Component {
 
  state = {
    titre: 'Mon catalogue voitures'
  }

  changeTitle = (e) => {
    this.setState({
      titre : 'Mon nouveau titre'
    })
  }

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>
        <button onClick={this.changeTitle}>Changer le boutton</button>
      </div>
      
    );

  }
}

export default App;
