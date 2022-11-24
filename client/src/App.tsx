import React from 'react';
import logo from './logo.svg';
import './App.css';

const RemoteComp = React.lazy(() => import("rileysRemoteMfe/App")) as React.FC;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is mfe appshell
        </p>
        <RemoteComp />
      </header>
    </div>
  );
}

export default App;
