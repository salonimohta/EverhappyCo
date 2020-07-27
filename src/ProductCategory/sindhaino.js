import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class Sindhaino extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Sindhaino</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/DP/UJ/MY-2400867/syndanio-sheet-500x500.jpg' alt='' />
                    <Link to="/product/Sindhaino-Sheet">Sheet</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://3.imimg.com/data3/AH/CD/MY-9706578/syndanio-segment-500x500.jpg' alt='' />
                    <Link to="/product/Sindhaino-Segment">Segment</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://img3.exportersindia.com/product_images/bc-full/dir_146/4376597/rectangular-bars-2421921.jpg' alt='' />
                    <Link to="/product/Sindhaino-Bar">Bar</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/BY/EC/MY-3229803/syndanio-spacers-250x250.jpg' alt='' />
                    <Link to="/product/Sindhaino-Gutka">Gutka</Link>
                </div>
            </div>
            </div>
        )
    }
}

