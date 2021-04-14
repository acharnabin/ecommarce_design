import {Badge} from '@material-ui/core'
import '../css/navbar.css';
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from '../store/Stateprovider';

const Navbar=()=>{
  const[{cart}]=useStateValue();
  return(
    <>
    
    <nav class="navbar navbar-expand-sm fixed-top sticky-top  bg-light">
     <div className="navbar-toggler ">
       <div className="header-top order-0">
       <div className="header-top-item">
     
       </div>
       <div className="header-top-item">
       <Link to='/' class="navbar-brand" href="#">Myite.in</Link>
       </div>
       <div className="header-top-item">
       <form className="form-inline my-2 my-lg-0 nav-search">
      <input className="form-control mr-sm-2 nav-search" type="search" placeholder="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><SearchIcon/></button>
      </form>
       </div>
       <div className="header-top-item">
       <Link to='/cart' className="nav-link" ><span><Badge badgeContent={cart?.length} color="secondary"><ShoppingCartIcon fontSize="large"/></Badge></span></Link>
       </div>
        
         

         
      
       </div>

       <div className="header-lower order-1">
      
       <div className="nav-item-lower">
       <Link to='/' className="nav-link" >Home</Link>
        </div>
        <div className="nav-item-lower">
       <Link to='/page2' className="nav-link" >Fashion</Link>
        </div>
        <div className="nav-item-lower">
       <Link to='/page1' className="nav-link" >Mobiles</Link>
        </div>
        <div className="nav-item-lower">

        </div>
       <div className="nav-item-lower">
       <Link to='/orders' className="nav-link" >Orders</Link>
        </div>
        <div className="nav-item-lower">
        <Link  className="nav-link" >Account</Link>
        </div>
 
    
       </div>
     </div>
 
          <div className="collapse navbar-collapse fixed-top sticky-top bg-light">
        <Link to='/' class="navbar-brand" href="#">Mysite.in</Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item p-lg-2 p-sm-1" >
              <Link to='/' className="nav-link ">Home <span className="sr-only">(current)</span></Link>
            </li>
        </ul>

        <form className="form-inline my-2 my-lg-0 nav-search">
            <input className="form-control mr-sm-2 nav-search" type="search" placeholder="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><SearchIcon/></button>
          </form>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            
            <li className="nav-item p-lg-2 p-sm-1">
              <Link to='/cart' className="nav-link" >cart<span><Badge badgeContent={cart?.length} color="secondary"><ShoppingCartIcon/></Badge></span></Link>
            </li>
            <li className="nav-item p-lg-2 p-sm-1">
              <Link to='/orders' className="nav-link" >My Orders</Link>
            </li>
            <li className="nav-item p-lg-2 p-sm-1">
              <Link  className="nav-link" >My Account</Link>
            </li>
          </ul>
          
        </div>
      </nav>
  
    
    
      
    </>
  )
}

export default Navbar;