import Header from './Header'
import Home from './Home'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Product from './Product';
import Cart from './Cart';
import Hero from './Hero';
import Favouriteproducts from './Favouriteproducts';
import Login from './Login'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){

        dispatch({
          type :  "SET_USER",
          user : authUser
        })

      }else{
        dispatch({
          type :  "SET_USER",
          user : null
        })
      }
    });

    return () => {
      unsubscribe()
    }
  },[])


  return (
    <BrowserRouter>
      <div>
        <Routes>

          <Route path='/' element={<div><Header /><Home /></div>} />
          
          <Route path='/product' element={<div><Product /></div>} />
          
          
          <Route path='/cart' element={<> <Header /> <Cart /> </>}/>

          <Route path='/login' element={<Login />} />
       
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
