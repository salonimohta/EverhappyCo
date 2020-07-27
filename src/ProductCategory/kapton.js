import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class Kapton extends React.Component {
    render() {
        return (
            <div>
            <h2 class="productCategoryTitle">Kapton</h2>
        <div class="productCards">
            <div class="productCardBox">
                <img id="cardImg" src='https://5.imimg.com/data5/GW/NN/MC/ANDROID-55636845/20190823-182930-jpg-500x500.jpg' alt='' />
                <Link to="/product/Kapton-Film_Tape_Cgip_Permasel">Film/ Tape/ Cgip/ Permasel</Link>
            </div>
        </div>
        </div>
        )
    }
}

