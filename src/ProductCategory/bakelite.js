import React from 'react';
import './index.css';

export default class Bakelite extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Bakelite</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/KV/HK/MY-2295394/bakelite-sheet-500x500.jpg' alt='' />
                    <div>Sheet</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/PV/AI/MY-988749/bakelite-tube-250x250.jpg' alt='' />
                    <div>Tube</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='http://www.industrialproductssupplier.com/wp-content/uploads/2016/05/Bakelite-Hylam-Fabric-base-sheet.jpg' alt='' />
                    <div>Cloth Fiber Sheet</div>
                </div>
            </div>
            </div>
        )
    }
}

