import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class Polyester extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Polyester</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/XB/RX/MY-7859989/polyester-woven-tape-500x500.jpg' alt='' />
                    <Link to="/product/Polyester-Woven_Tape">Woven Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/UU/NL/DZ/GLADMIN-24477135/2mm-dori-polyester-500x500.jpg' alt='' />
                    <Link to="/product/Polyester-Cord">Cord</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/EC/EE/MY-13735391/polyester-tape-500x500.jpg' alt='' />
                    <Link to="/product/Polyester-Film_Tape">Film/Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://3.imimg.com/data3/CX/HE/MY-3060441/polyester-papers-250x250.jpg' alt='' />
                    <Link to="/product/Polyester-Minilux_Sheet_Vartex_Bicco_Garlam">Minilux Sheet/ Vartex/ Bicco/ Garlam</Link>
                </div>
            </div>
            </div>
        )
    }
}

