import React from 'react';
import './index.css';

export default class Teflon extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Teflon</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/KW/UF/MY-39233334/teflon-tape-2f-ptfe-tape-500x500.jpg' alt='' />
                    <div>Tape</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/GI/FW/MY-7190878/teflon-rod-500x500.jpg' alt='' />
                    <div>Rod</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://sc02.alicdn.com/kf/HTB1EiCtbtzvK1RkSnfoq6zMwVXaF.jpg_640x640q50.jpg' alt='' />
                    <div>Sheet</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/DO/UC/MY-3325952/teflon-cloth-500x500.jpg' alt='' />
                    <div>Glass Fibre PTFE Cloth</div>
                </div>
            </div>
            </div>
        )
    }
}

