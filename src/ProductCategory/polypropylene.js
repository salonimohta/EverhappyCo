import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class Polypropylene extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Polypropylene</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/DX/MR/MY-3240060/polypropylene-rod-500x500.jpg' alt='' />
                    <Link to="/product/Polypropylene-Rod">Rod</Link>
                </div>
            </div>
            </div>
        )
    }
}

