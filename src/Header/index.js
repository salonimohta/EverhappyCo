import React from 'react';
import './index.css';
import Search from '../Search';

export default class Header extends React.Component{
    render(){
        return (
			<div className="flex-container1">
				<div className="flex-container2">
					<div className="image">
					
						<img
						className="LogoImg"
						src={require("../ecc_logo.png")}
						alt="everhappy logo"
						/>
					</div>
					<div className="flex-container3" style={{'padding-left': '2%'}}>
					<div className="L1">Everhappy Commercial Corporation</div>
					<div className="L2">Deals in: Electrical Insulating Materials</div>
					</div>
					</div>
					<br/>
					<div className="flex-container3" style={{'padding-left': '10%'}}>
					<Search />
					</div>
			</div>
        )
    }
}