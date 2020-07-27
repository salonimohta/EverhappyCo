import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class PVC extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">PVC</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/IF/DB/MY-9745384/polyester-film-500x500.jpg' alt='' />
                    <Link to="/product/PVC-Polyester_Roll_Tape_Imported_Pvc_Tape">Polyester Roll/ Tape/ Imported Pvc Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/QH/WN/MY-4158433/automotive-pvc-sleeving-500x500.jpg' alt='' />
                    <Link to="/product/PVC-Sleeving">Sleeving</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://sc02.alicdn.com/kf/HTB1ptfdXEH1gK0jSZSyq6xtlpXaG.jpg_640x640q50.jpg' alt='' />
                    <Link to="/product/PVC-Heat_Sink_Sleeving">Heat Sink Sleeving</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://www.deltakit.net/wp-content/uploads/2019/05/Heat-Shrink-Sleeve-10mm-Black-2meter-Industrial-Grade-WOER-HST-458x458.jpeg' alt='' />
                    <Link to="/product/PVC-Woer_Heat_Sink_Sleeving">Woer Heat Sink Sleeving</Link>
                </div>
            </div>
            </div>
        )
    }
}

