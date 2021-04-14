import React from 'react';
import Navbar from './container/Navbar';
import { BrowserRouter,Switch,Route,useParams } from "react-router-dom";
import Home from './container/Home';
import ProductDetails from './container/ProductDetails';
import Smartphone from './container/Smartphone';
import Fashionpage from './container/Fashionpage';
import Watchpage from './container/Watchpage';
import Cart from './container/Cart';
import Checkout from './container/Checkout';
import Orders from './container/Orders';
import Redux from './container/Redux';
function App() {
  
  
  return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/products/:title/:price' component={ProductDetails}/>
          <Route exact path='/Redux' component={Redux}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/page1' component={Smartphone}/>
          <Route exact path='/page2' component={Fashionpage}/>
          <Route exact path='/page3' component={Watchpage}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/orders' component={Orders}/>
          
        </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;
