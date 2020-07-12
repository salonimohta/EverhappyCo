import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Navbar extends React.Component{
  render(){
    return(
      <div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contactus">Contact us</Link>
      </div>
    )
  }
}