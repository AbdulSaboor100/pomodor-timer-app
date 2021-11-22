import React from 'react';
import './App.css';
import ContextProvider from './context/context';
import Home from './screens/home';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Home />
      </ContextProvider>

    </div>
  );
}

export default App;
