import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class Mica extends React.Component {
    render() {
        return (
            <div>
            <h2 class="productCategoryTitle">Mica (Silicon Bonded Paper Mica)</h2>
        <div class="productCards">
            <div class="productCardBox">
                <img id="cardImg" src='https://5.imimg.com/data5/WN/LI/MY-1634853/tufflam-silicon-bonded-mica-sheet-phlgophite-500x500.jpg' alt='' />
                <Link to="/product/Mica-Sheet">Sheet</Link>
            </div>
            <div class="productCardBox">
                <img id="cardImg" src='https://tiimg.tistatic.com/fp/2/001/184/silicon-bonded-mica-tubes-781.jpg' alt='' />
                <Link to="/product/Mica-Tube">Tube</Link>
            </div>
            <div class="productCardBox">
                <img id="cardImg" src='https://5.imimg.com/data5/AM/SV/MY-5361308/mica-paper-board-washer-500x500.jpg' alt='' />
                <Link to="/product/Mica-Washer">Washer</Link>
            </div>
            <div class="productCardBox">
                <img id="cardImg" src='https://4.imimg.com/data4/VT/FB/MY-197546/1-250x250.jpeg' alt='' />
                <Link to="/product/Mica-Segment">Segment</Link>
            </div>
            <div class="productCardBox">
                <img id="cardImg" src='https://bincomica.com/images/tapes1.png' alt='' />
                <Link to="/product/Mica-Tape">Tape</Link>
            </div>
        </div>
        <br/>
        <div class="productCards">

            <div class="productCardBox">
                <img id="cardImg" src='https://img3.exportersindia.com/product_images/bc-full/2018/12/4775067/glass-mica-pet-film-tape-1545204545-4576577.jpeg' alt='' />
                <Link to="/product/Mica-Polyester_Glass_Mica_Poyester">PGMP (Polyester Glass Mica Polyester) Tape And Sheet </Link>
            </div>
            <div class="productCardBox">
                <img id="cardImg" src='https://4.imimg.com/data4/AP/EH/MY-20487121/mica-sheet-500x500.jpg' alt='' />
                <Link to="/product/Mica-HRM_Sheet">HRM Sheet</Link>
            </div>
        </div>
        </div>       
        )
    }
}

