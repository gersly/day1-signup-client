import React from 'react';
import './App.css';
import SignUpContainer from './components/SignUp/SignUpContainer';
import SignInContainer from './components/SignIn/SignInContainer'
import ForgotPasswordContainer from './components/ForgotPassword/ForgotPasswordContainer';
import Nav from './components/Nav/Nav'
import Title from './components/Title'


function App() {
  return (
    <div className="main">
    <div className="App">
  <div className="card bg-transparent border-0">
    <Title />
  <div class="card-header bg-transparent border-0">
       <Nav />
       </div>
      <div class="tab-content p-3 rounded-lg" id="myTabContent">
        <div class="tab-pane fade show active mt-1" 
        id="signup" role="tabpanel" 
        aria-labelledby="signup-pill">
          <SignUpContainer />
        </div>
        <div class="tab-pane fade mt-1" id="signin" 
        role="tabpanel" aria-labelledby="signin-pill">
          <SignInContainer />
        </div>
        <div class="tab-pane fade mt-1" id="forgot" 
        role="tabpanel" aria-labelledby="forgot-pill">
          <ForgotPasswordContainer />
        </div>
      </div>
      </div>
    
      </div>
    </div>
  );
}

export default App;
