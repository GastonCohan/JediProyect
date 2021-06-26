import './App.css';
import "semantic-ui-css/semantic.min.css"
import { Route } from "react-router-dom"

// COMPONENTS

import HomeScreen from './components/Pages/HomePage';
import SignInScreen from './components/Pages/SignInPage';
import RegisterScreen from './components/Pages/RegisterPage';
import RecoverPassword from './components/Pages/RecoverPasswordPage/RecoverPasswordPage'
import RecoverPasswordSuccedPage from './components/Pages/RecoverPasswordSucced/RecoverPasswordSuccedPage';

// RENDER


function App() { 
    return(
      <div className="App">
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/SignIn" component={SignInScreen}/>
        <Route exact path="/Register" component={RegisterScreen}/>
        <Route exact path="/RecoverPassword" component={RecoverPassword}/>
        <Route exact path="/RecoverPasswordSucced" component={RecoverPasswordSuccedPage}/>
      </div>
    )
  
  
}

export default App;


