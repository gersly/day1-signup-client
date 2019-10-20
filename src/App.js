import React from 'react';
import './App.css';
import SignUpContainer from './components/SignUp/SignUpContainer';
import SignInContainer from './components/SignIn/SignInContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SignInContainer />
      </header>
    </div>
  );
}

export default App;
