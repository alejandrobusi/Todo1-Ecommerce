import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home/Home'
import CategoriesPage from './Pages/Categories/CategoriesPage';
import Cart from './Pages/Cart/Cart';
import Detail from './Pages/Detail/Detail';
import Confirmation from './Pages/Confirmation/Confirmation';
import Admin from './Pages/Admin/Admin'
import Contact from './Pages/Contact/Contact';
import Edit from './Pages/Edit/Edit'
import Register from './Pages/Register/Register';


function App() {

  const checkUser = localStorage.getItem('user');
  const user = {
    name: "Visita",
    admin: false
  }
  
  if (!checkUser) {
    localStorage.setItem('user', JSON.stringify(user))
  } 

  const checkCart = localStorage.getItem('cart');
  const cart = [];
  
   if (!checkCart) {
     localStorage.setItem('cart', JSON.stringify(cart))
  } 

  // const checkFav = localStorage.getItem('fav');
  // const fav = [];

  //  if (!checkFav) {
  //    localStorage.setItem('cart', JSON.stringify(fav))
  // }


  return (
    <div>
      <BrowserRouter>
          <Switch>
            
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route path="/home" component={Home}/>

            <Route path="/categories" component={CategoriesPage}/>

            <Route path="/cart" component={Cart}/>

            <Route path="/detail/:id" component={Detail}/>

            <Route path="/confirmation" component={Confirmation} />

            <Route path="/admin" component={Admin} />

            <Route path="/edit/:id" component={Edit} />
    
            <Route path="/contacto" component={Contact} />

            <Route path="/register" component={Register} />
            
          </Switch>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
