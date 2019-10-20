import React from 'react';
import './App.css';
import SignUpContainer from './components/SignUp/SignUpContainer';
import SignInContainer from './components/SignIn/SignInContainer'
import ForgotPasswordContainer from './components/ForgotPassword/ForgotPasswordContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ForgotPasswordContainer />
      </header>
    </div>
  );
}

export default App;
