import './App.css';
import "semantic-ui-css/semantic.min.css"
import { Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

// COMPONENTS

import HomeScreen from './Pages/HomePage/HomePage';
import SignInScreen from './Pages/SignInPage/SignInPage';
import RegisterScreen from './Pages/RegisterPage/RegisterPage';
import RecoverPassword from './Pages/RecoverPasswordPage/RecoverPasswordPage'
import RecoverPasswordSuccedPage from './Pages/RecoverPasswordSuccedPage/RecoverPasswordSuccedPage';
import ShopComponent from './Pages/ShopPage/ShopComponent'
import AddProduct from './Pages/AddProduct/AddProduct';
import { CartProvider } from './context/CartContext';
import legoShop from './Pages/LegoShop/legoShop';
import BuyPage from './Pages/BuyPage/BuyPage';
import OrderGenerated from './Pages/OrderGenerated/OrderGenerated';

// RENDER



function App() {
  return (
    <div className="App">
      <CartProvider>
        <Toaster />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/SignIn" component={SignInScreen} />
        <Route exact path="/Register" component={RegisterScreen} />
        <Route exact path="/RecoverPassword" component={RecoverPassword} />
        <Route exact path="/RecoverPasswordSucced" component={RecoverPasswordSuccedPage} />
        <Route exact path="/Shop" component={ShopComponent} />
        <Route exact path="/legoShop" component={legoShop} />
        <Route exact path="/AddProduct" component={AddProduct} />
        <Route exact path="/BuyPage" component={BuyPage} />
        <Route exact path="/OrderGenerated" component={OrderGenerated} />
      </CartProvider>
    </div>
  )
}

export default App;


