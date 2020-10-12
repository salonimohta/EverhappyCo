import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Navbar extends React.Component{
  constructor(){
    super();
    this.state={
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
  render(){
    return(
      <div>
      <div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link onClick={this.showMenu}>Product</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contactus">Contact us</Link>
          </div>
          <div>
          {
            this.state.showMenu 
            ? (
              <div className="dropdownMenu">
                  <div className="dropdownSection">
                    <Link to="/acrylic">Acrylic</Link>
                    <Link to="/asbestos">Asbestos</Link>
                    <Link to="/bakelite">Bakelite</Link>
                    <Link to="/cable-tie">Cable Tie</Link>
                    <Link to="/cable-joint">Cable jointing compound and kit</Link>
                    <Link to="/Cu-Al">Copper and Aluminium</Link>
                    <Link to="/furnace">Furnace Materials</Link>
                  </div>
                  <div className="dropdownSection">
                    <Link to="/glass-fibre">Glass Fibre ( Polyester and Epoxy)</Link>
                    <Link to="/kapton">Kapton</Link>
                    <Link to="/mica">Mica (Silicon bonded paper mica)</Link>
                    <Link to="/nomex">Nomex</Link>
                    <Link to="/nylon">Nylon</Link>
                    <Link to="/polyester">Polyester</Link>
                    <Link to="/polypropylene">Polypropylene</Link>
                  </div>
                  <div className="dropdownSection">
                    <Link to="/pvc">PVC</Link>
                    <Link to="/sindhaino">Sindhaino</Link>
                    <Link to="/teflon">Teflon</Link>
                    <Link to="/transformer">Transformer Materials</Link>
                    <Link to="/varnish">Varnish and Thiner</Link>
                    <Link to="/wires-tapes">Wires and Tapes</Link>
                    <Link to="/Other_Major_Products">Other Major Products</Link>
                  </div>
                </div>
            )
            : (
              null
            )
          }
          </div>
      </div>
    )
  }
}