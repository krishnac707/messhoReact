import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import images from '../../images/download.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMobileScreen, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth.context';


const Header = () => {

  const { state, logout } = useContext(AuthContext);
  const [user, setUser] = useState();
  const router = useNavigate();

  useEffect(() => {
    if (state?.user) {
      setUser(state?.user)
    }
    else {
      setUser({});
    }
  }, [state])

  const redirectLogin = () => {
    if (user?.name) {
      router('/profile-update');
    }
  }

  return (
    <>
      <div id='header'>
        <div className="messshoLogo">
          <img onClick={()=>router("/")} src={images} alt="" />
        </div>
        <div className="searchBar">
          <div className="searchbarDiv">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='iconPadding' />
            <input type="text " className="inputSize" placeholder="Try Saree,Kurti or Search by Product Code" />
          </div>
        </div>
        <div className="appDownload">
          <FontAwesomeIcon icon={faMobileScreen} className='mobileMargin' />
          <p className="appDown headerFontSize">Download App</p>
        </div>
        <div className="supplier">
          {/* <p className="supplierCss headerFontSize">Became a Supplier</p> */}
          {user?.role == "Seller" ? <p className='supplierCss headerFontSize' style={{cursor:"pointer"}} onClick={() => router('/add-product')}>Add Product</p> : <p className='supplierCss headerFontSize'>Became a Supplier</p>}

        </div>
        <div className="profileCart">
          <div className="profile-header profile-hover">
            <FontAwesomeIcon icon={faUser} className='iconCenter' />
            <div className="dropdown">
              {user?.email ? <p style={{ fontSize: "18px" }}>{user.name}</p> : <p className="profile-hover" style={{ fontSize: "18px" }}>Profile</p>}
              <div className="dropdown-content1">
                {user?.email && <div className='dropdonw-mens-para1'><p onClick={redirectLogin}>My Account</p></div>}
                {user?.email ?
                  <div className='dropdonw-mens-para1'><p onClick={logout}>Logout</p></div>
                  :
                  <div className='dropdonw-mens-para1' onClick={() => router('/register')}>
                    <h3>Hello User</h3>
                    <p style={{fontSize:"10px"}}>To access your messho account</p>
                    <button className='login-register-button-css-navbar'>Sign Up</button>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="wishlist-header">
            <FontAwesomeIcon icon={faHeart} />
            <p style={{ fontSize: "18px" }}>wishlist</p>
          </div>
          <div className="cart-header" onClick={()=>router('cart')}>
            <FontAwesomeIcon icon={faCartShopping} className='iconCenter' />
            <p style={{ fontSize: "18px",cursor:"pointer"}}>Cart</p>
          </div>
        </div>
      </div>
      <div id="navbar" className="navbarFont">
        <p onClick={()=>router('womens')}>Women Ethnic</p>
        <p>Women Western</p>
        <p onClick={()=>router('mens')}>Men</p>
        <p onClick={()=>router('kids')}>Kids</p>
        <p>Home & Kitchen</p>
        <p>Beauty & Health</p>
        <p>Jewellery & Accessories</p>
        <p>Bags & Footwear</p>
        <p>Electronics</p>
      </div>
    </>
  )
}

export default Header
