import React from 'react';
import './index.css';

export default class Header extends React.Component{
    render(){
        return (
            <div>
	            <div>
	                <div className="flex-container1">
				         <div className="image">
				            
				              <img
				                className="img"
				                src={require("../ecc_logo.png")}
				                alt="everhappy logo"
				              />
				          </div>
				          <div className="flex-container2">
				            <div className="L1">Everhappy Commercial Corporation</div>
				          </div>
				    </div>
	            </div>
               
            </div>
        )
    }
}