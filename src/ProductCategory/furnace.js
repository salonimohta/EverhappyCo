import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class Furnace extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Furnace Materials</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://img3.exportersindia.com/product_images/bc-full/dir_6/162139/frp-plain-sheets-2875671.jpg' alt='' />
                    <div>Frp Sheet/Bar/Washer/ Gutka/ Tube</div>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/NZ/HA/CZ/ANDROID-8160457/product-jpeg-500x500.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Glass_Fibre_Tape">Glass Fibre Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://images-na.ssl-images-amazon.com/images/I/81LFNcgnEqL._SL1500_.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Araldite">Araldite</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/IR/YX/JL/SELLER-1731595/flexocoat-subond-2216-base-hardener-500x500.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Subond_Base_And_Hardener">Subond Base And Hardener</Link>
                </div>
            </div>
            <br/>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://cpimg.tistatic.com/05596523/b/4/Plain-Cork-Sheets.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Plain_Cork_Sheet">Plain Cork Sheet</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://4.imimg.com/data4/VM/OS/MY-259396/ptfe-sheet-500x500.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-PTFE_Sheet">PTFE Sheet</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/NC/CN/SV/SELLER-12222695/fibre-glass-sleevings-500x500.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Glass_Varnish_Sleeving">Glass Varnish Sleeving</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/RR/YA/MY-3338873/electrical-silicon-sleeving-500x500.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Special_Silicon_Sleeving">Special Silicon Sleeving</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://robu.in/wp-content/uploads/2015/06/100mm-HST.jpeg' alt='' />
                    <Link to="/product/Furnace_Materials-Heat_Sinking_Sleeving">Heat Sinking Sleeving</Link>
                </div>
            </div>
            <br/>
            <div class="productCards">
            
                <div class="productCardBox">
                    <img id="cardImg" src='https://4.imimg.com/data4/WO/DJ/MY-4000578/mseal-epoxy-compound-250x250.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Mseal_Putty">Mseal Putty</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://tiimg.tistatic.com/fp/1/004/387/spiral-sleeve-and-pvc-ferrules-491.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Pvc_Farrul_And_Spiral">Pvc Farrul And Spiral</Link>
                </div>
            <div class="productCardBox">
                    <img id="cardImg" src='https://www.industricals.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/r/precision-20mm-steel-wire-reinforced-flexible-conduit-pipe-grey.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Conduit_Pipe">Conduit Pipe</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/TX/XZ/QB/SELLER-33638280/rr-kabel-pvc-house-wire-500x500.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Pv_Wire_And_Compensating_Wire">Pv Wire And Compensating Wire</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/LY/ES/FC/SELLER-2656752/3m-scotch-13-semi-conducting-tape-500x500.jpg' alt='' />
                    <Link to="/product/Furnace_Materials-Semi_Conducting_Tape_&_I_V_Tape_Amal_Gama_Ting_Tape_&_Self_Fusing_Tape">Semi Conducting Tape & I. V.Tape, Amal Gama Ting Tape & Self Fusing Tape</Link>
                </div>
                </div>
            </div>
        )
    }
}

