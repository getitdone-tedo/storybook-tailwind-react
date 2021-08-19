import React from 'react';
import './App.css';
import TButton from './components/Styled/Button/TButton';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TButton label="we"></TButton>
      </header>
    </div>
  );
}

export default App;
