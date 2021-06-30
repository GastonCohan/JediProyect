import './App.css';
import "semantic-ui-css/semantic.min.css"
import { Route } from "react-router-dom"

// COMPONENTS

import HomeScreen from './Pages/HomePage/HomePage';
import SignInScreen from './Pages/SignInPage/SignInPage';
import RegisterScreen from './Pages/RegisterPage/RegisterPage';
import RecoverPassword from './Pages/RecoverPasswordPage/RecoverPasswordPage'
import RecoverPasswordSuccedPage from './Pages/RecoverPasswordSuccedPage/RecoverPasswordSuccedPage';
import ShopComponent from './Pages/ShopPage/ShopComponent'

// RENDER



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/SignIn" component={SignInScreen} />
      <Route exact path="/Register" component={RegisterScreen} />
      <Route exact path="/RecoverPassword" component={RecoverPassword} />
      <Route exact path="/RecoverPasswordSucced" component={RecoverPasswordSuccedPage} />
      <Route exact path="/Shop" component={ShopComponent} />
    </div>
  )
}

export default App;


