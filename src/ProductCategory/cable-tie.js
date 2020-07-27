import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class CableTie extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Cable Tie</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://4.imimg.com/data4/TT/CB/NSDMERP-45421834/nylolcableties-500x500.png' alt='' />
                    <Link to="/product/Cable_Tie-Nylon_Cable_Ties">Nylon Cable Ties</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://www.bestofelectricals.com/images/thumbs/0017028_16mm-a-z-cable-marker-ferrule.jpeg' alt='' />
                    <Link to="/product/Cable_Tie-Cable_Marker">Cable Marker</Link>
                </div>
            </div>
            </div>
        )
    }
}

