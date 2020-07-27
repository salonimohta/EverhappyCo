import React from 'react';
import './index.css';
import { Link} from 'react-router-dom';

export default class CableJoint extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Cable jointing compound and kit</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/IB/OC/MY-52613039/3m-resin-solution-compound-kits-500x500.jpg' alt='' />
                    <Link to="/product/Cable_joints-3M_All_Product_Range">3M - All Product Range</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://4.imimg.com/data4/CQ/YJ/MY-2254142/denson-make-cable-joint-kit-250x250.jpg' alt='' />
                    <Link to="/product/Cable_joints-Denson">Denson</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/BL/SV/MY-2747239/cable-jointing-kit-500x500.png' alt='' />
                    <Link to="/product/Cable_joints-Rackum">Rackum</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://3.imimg.com/data3/RE/DS/MY-15396282/heat-shrinkable-joints-terminations-kits-250x250.jpg' alt='' />
                    <Link to="/product/Cable_joints-Master">Master</Link>
                </div>
            </div>
            </div>
        )
    }
}

