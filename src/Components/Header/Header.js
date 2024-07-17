import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../contexts/firebaseContext';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const{user}=useContext(AuthContext)

  const navigate=useNavigate('');
  const signOutHandle=()=>{
    signOut(auth).then(() => {
        navigate('/login')
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleSell=()=>{
    navigate('/create')
  }
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo/>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span >{user?`welcome ${user.displayName}`:<Link to='/login'>Login</Link>}</span>
          <hr />
        </div>
        <div className='loginPage'>
          <span onClick={signOutHandle}>{user?'Logout':''}</span>
        </div>

        <div className="sellMenu" onClick={handleSell}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
