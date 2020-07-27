import React from 'react';
import './index.css';
import { Link} from 'react-router-dom';

export default class Asbestos extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Asbestos</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/XR/FS/OE/IOS-3425082/product-jpeg-250x250.png' alt='' />
                    <Link to="/product/Asbestos-Millboard">Millboard</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/HP/EA/MY-766262/asbestos-cloth-500x500.jpg' alt='' />
                    <Link to="/product/Asbestos-Cloth">Cloth</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://sc01.alicdn.com/kf/HTB1JF.3LFXXXXbHXVXXq6xXFXXXS/2698823/HTB1JF.3LFXXXXbHXVXXq6xXFXXXS.jpg' alt='' />
                    <Link to="/product/Asbestos-Tape">Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://4.imimg.com/data4/LK/HE/MY-1424085/image-500x500.jpg' alt='' />
                    <Link to="/product/Asbestos-Champion_Sheet">Champion Sheet</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://www.shreefirepackindia.com/gifs/asbestos-rope3.jpg' alt='' />
                    <Link to="/product/Asbestos-Rope">Rope</Link>
                </div>
            </div>
            <br/>
            <div class="productCards">
                
                <div class="productCardBox">
                    <img id="cardImg" src='https://img.alicdn.com/imgextra/i4/927429866/TB21hqVaXXXXXXWXXXXXXXXXXXX_!!927429866.jpg' alt='' />
                    <Link to="/product/Asbestos-Belt">Belt</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://4.imimg.com/data4/HS/CI/MY-2952748/asbestos-gland-packings-500x500.jpg' alt='' />
                    <Link to="/product/Asbestos-Gland_Packing">Gland Packing</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/FS/IB/MY-3610346/ceramic-fiber-blanket-500x500.jpg' alt='' />
                    <Link to="/product/Asbestos-Ceramic_Blanket">Ceramic Blanket</Link>
                </div>
            </div>
            </div>
        )
    }
}

