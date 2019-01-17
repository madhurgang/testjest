import React, { Component } from 'react';
import './App.css';

const Main = (props) => {
  return (
    <div>
      <button onClick={() => alert('clicked')}>Hi, I am {props.name}</button>
    </div>
  )
}

export default class App extends Component {

  state = {
    names: ['amit', 'abh', 'bach', 'chan']
  }

  render() {
    return (
      <div className="MyApp">
        <header className="App-header">
          {
            this.state.names.map(
              (item, i) => <Main name={item} key={i} />
            )
          }
        </header>
      </div>
    );
  }
}
