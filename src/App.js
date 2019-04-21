import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
      so: 0
    }
  cong() {
    this.setState({ so: this.state.so + 1 })
  };

  tru() {
    this.setState({ so: this.state.score -1 })
  };

  render() {
    return(
      <div >
        <button className='red' onClick={this.cong.bind(this)} >+</button>
        <p className='so'>{this.state.so}</p>
        <button className='green' onClick={this.tru.bind(this)}>-</button>
      </div>
    )
  }
}

export default App;