import React from 'react';
import './index.css';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

export default class Layout extends React.Component{
	render(){
const {children} = this.props;
        return(
			<div className="parent">
                <div>
			    <Navbar/>
                <Header/> 
                </div>
                <div>

			 {
                 children
             }
             <br/>
                </div>
           {/* <div className="grow" />*/} 
             <Footer />
            </div>
		)
	}

}
