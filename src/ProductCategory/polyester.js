import React from 'react';
import './index.css';

export default class Polyester extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Polyester</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/XB/RX/MY-7859989/polyester-woven-tape-500x500.jpg' alt='' />
                    <div>Woven Tape</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/UU/NL/DZ/GLADMIN-24477135/2mm-dori-polyester-500x500.jpg' alt='' />
                    <div>Cord</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/EC/EE/MY-13735391/polyester-tape-500x500.jpg' alt='' />
                    <div>Film/Tape</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://3.imimg.com/data3/CX/HE/MY-3060441/polyester-papers-250x250.jpg' alt='' />
                    <div>Minilux Sheet/ Vartex/ Bicco/ Garlam</div>
                </div>
            </div>
            </div>
        )
    }
}

