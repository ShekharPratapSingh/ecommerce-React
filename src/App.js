import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={ SignInAndSignUp}/>
     </Switch>
      
    </div>
  );
}

export default App;
