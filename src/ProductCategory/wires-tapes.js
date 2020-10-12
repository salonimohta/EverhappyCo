import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class WiresTapes extends React.Component {
    render() {
        return (
            <div>
                <h2 class="productCategoryTitle">Wires and Tapes</h2>
            <div class="productCards">
                <div class="productCardBox">
                    <img id="cardImg" src='https://www.kanthal.com/filtered/26346/rszww290-90/resistance-heating-wire-and-resistance-wire-white-223849391-rszww290-90.jpg' alt='' />
                    <Link to="/product/Wires_and_Tapes-Kanthal_Wire_Strip">Kanthal Wire/ Strip</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/IA/BF/MY-30608537/wiring-accessories-500x500.jpg' alt='' />
                    <Link to="/product/Wires_and_Tapes-Cable_Wire_And_All_Accessories">Cable Wire And All Accessories</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://tiimg.tistatic.com/fp/8/005/171/4r-self-adhesive-bopp-tape-911.jpg' alt='' />
                    <Link to="/product/Wires_and_Tapes-BOPP_Tape">Bopp Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/BJ/PO/UF/ANDROID-92462994/prod-20191106-1729238256003197164700265-jpg-500x500.jpg' alt='' />
                    <Link to="/product/Wires_and_Tapes-Cello_Tape">Cello-Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/AO/FE/MY-62697677/cotton-tape-500x500.jpg' alt='' />
                    <Link to="/product/Wires_and_Tapes-Cloth_Adhesive_Tape">Cloth Adhesive Tape (Single And Double-Sided)</Link>
                </div>
            </div>
            <br/>
            <div class="productCards">
            
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/UU/WP/MY-4055480/pink-rayon-tape-500x500.jpg' alt='' />
                    <Link to="/product/Wires_and_Tapes-Pink_Rayon_Tape">Pink Rayon Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/HA/PB/MY-14029601/duct-tape-500x500.jpg' alt='' />
                    <Link to="/product/Wires_and_Tapes-Duct_Tape">Duct Tape</Link>
                </div>
                <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/DG/TJ/CU/SELLER-75930225/masking-tape-500x500.jpg' alt='' />
                    <Link to="/product/Wires_and_Tapes-Masking_Tape_Tissue_Tape_Floor_Marking_Tape_Self_Flushing_Tape_Foam_Tape_Gasket_Tape">Masking Tape/ Tissue Tape/ Floor Marking Tape/ Self Flushing Tape/ Foam Tape/ Gasket Tape</Link>
                </div>
            <div class="productCardBox">
                    <img id="cardImg" src='https://5.imimg.com/data5/XK/FW/MY-62697677/aluminium-foil-tape-500x500.jpg' alt='' />
                    <Link to="/product/Wires_and_Tapes-Aluminium_Foil_Tape">Aluminium Foil Tape</Link>
                </div>
            </div>
            </div>
        )
    }
}

