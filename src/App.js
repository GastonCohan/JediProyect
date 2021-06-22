import './App.css';
import "semantic-ui-css/semantic.min.css"
import { Route } from "react-router-dom"

// COMPONENTS

import HomeScreen from './components/Pages/HomeComponents';
import SignInScreen from './components/Pages/SignInComponent';

// RENDER


function App() { 
    return(
      <div className="App">
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/SignIn" component={SignInScreen}/>
      </div>
    )
  
  
}

export default App;


