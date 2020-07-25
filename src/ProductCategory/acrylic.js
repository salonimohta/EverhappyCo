import React from 'react';
import './index.css';
import { Link} from 'react-router-dom';

export default class Acrylic extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Acrylic</h2>
            <div class="productCards">
                <div class="productCardBox">

                    <img id="cardImg" src='https://5.imimg.com/data5/FX/TJ/MY-2503355/acrylic-sheets-500x500.jpg' alt='' />
                    <Link to="/product/Acrylic-Sheet">Sheet</Link>
                </div>
                
            </div>
            </div>
        )
    }
}

