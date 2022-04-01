import React from 'react';
import Konami from 'react-konami-code';
import logo from './logo.svg';
import './App.css';

class KonamiCode extends React.Component {
  easterEgg = () => {
    alert('Autor: José Lópex Chávez.');
  }

  render = () => (
    <Konami action={this.easterEgg} />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ↑ ↑ ↓ ↓ ← → ← → B A
        </p>
      </header>
      <KonamiCode />
    </div>
  );
}

export default App;
