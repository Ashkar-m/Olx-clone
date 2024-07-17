import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { useContext, useEffect } from 'react';
import { AuthContext } from './contexts/firebaseContext';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Create from './Components/Create/Create';
import View from './Components/View/View';
import PostContext, { ViewContext } from './contexts/viewContext';
import ViewPost from './Pages/ViewPost';


function App() {
  const{user,setUser}=useContext(AuthContext)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  },[])
  return (
    <div className="App">
    <PostContext>
      <Router>
        <Routes>

          <Route exact path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/view' element={<ViewPost/>}/>
        </Routes>
      </Router>
      </PostContext>  
    </div>
  );
}

export default App;
