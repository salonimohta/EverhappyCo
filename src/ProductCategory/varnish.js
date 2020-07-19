import React from 'react';
import './index.css';

export default class VarnishThiner extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Varnish and Thiner</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://3.imimg.com/data3/FA/XY/MY-4993915/insulating-varnish-500x500.jpg' alt='' />
                    <div>Dr. Beck/ Lurex/ Jyoti - All Ranges</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/MK/AB/MY-9766950/gp-resin-500x500.jpg' alt='' />
                    <div>Gp Resin</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/SB/PA/MY-1610801/accelerator-250x250.png' alt='' />
                    <div>Accelerator,Catalyst</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://2.wlimg.com/product_images/bc-full/2019/8/3213610/1564636474_p_1332264_971549.jpeg' alt='' />
                    <div>Epoxy Resin And Hardener</div>
                </div>
            </div>
            </div>
        )
    }
}

