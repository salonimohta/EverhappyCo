import React from 'react';
import './index.css';

export default class Nomex extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Nomex</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/FV/WX/MY-6670585/nomex-insulation-paper-500x500.jpg' alt='' />
                    <div>Nomex Paper Laminated</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/AQ/FQ/MY-9231191/dupont-pure-nomex-500x500.jpg' alt='' />
                    <div>Nomex Paper Pure</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://www.ukinsulations.co.uk/images/uploads/nomex/image4.jpg' alt='' />
                    <div>Tape</div>
                </div>
            </div>
            </div>
        )
    }
}

