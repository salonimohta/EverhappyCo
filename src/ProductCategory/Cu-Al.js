import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class CopperAluminium extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Copper and Aluminium (DPC,DGC,NPC,Kapton film covering)</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://4.imimg.com/data4/LO/GC/MY-18468482/super-enamelled-copper-wire-500x500.jpg' alt='' />
                    <Link to="/product/Copper_and_Aluminium-Super_Enamel_Cu_Wire">Bare/Enamel/Super Enamel Cu Wire</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/SM/ED/MY-2774511/copper-sheet-500x500.png' alt='' />
                    <Link to="/product/Copper_and_Aluminium-Rod_Sheet">Rod/Sheet</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://in.element14.com/productimages/standard/en_GB/42246673.jpg' alt='' />
                    <Link to="/product/Copper_and_Aluminium-Tinned_Copper_Wire">Tinned Copper Wire</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://4.imimg.com/data4/EI/YD/NSDMERP-2319183/fiberglassleadwire-500x500.png' alt='' />
                    <Link to="/product/Copper_and_Aluminium-Glass_Lead_Wire">Glass Lead Wire</Link>
                </div>
            <div class="productCardBox">
                    <img id="cardImg" src='https://wflake.com/wp-content/uploads/2017/02/Draw-Cord-510x341.jpg' alt='' />
                    <Link to="/product/Copper_and_Aluminium-PTFE_Wire">PTFE Wire</Link>
                </div>
            </div>
            </div>
        )
    }
}

