import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { UserIpInformation } from './presentation/component/UserIpInformation';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <UserIpInformation />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;