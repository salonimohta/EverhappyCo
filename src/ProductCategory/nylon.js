import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class Nylon extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Nylon</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/UV/MW/SF/SELLER-7004145/nylon-rod-500x500.jpg' alt='' />
                    <Link to="/product/Nylon-Rod">Rod</Link>
                </div>
            </div>
            </div>
        )
    }
}

