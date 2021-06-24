import './App.css';
import "semantic-ui-css/semantic.min.css"
import { Route } from "react-router-dom"

// COMPONENTS

import HomeScreen from './components/Pages/HomePage';
import SignInScreen from './components/Pages/SignInPage';
import RegisterScreen from './components/Pages/RegisterPage';

// RENDER


function App() { 
    return(
      <div className="App">
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/SignIn" component={SignInScreen}/>
        <Route exact path="/Register" component={RegisterScreen}/>
      </div>
    )
  
  
}

export default App;


