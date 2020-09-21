import React from 'react';
import './index.css';

export default class Product extends React.Component {
    render(){
        return(
            <div>
                <h2>We sell the following Product Categories:</h2>
                <ul>
                    <li>Acrylic</li>
                    <li>Asbestos</li>
                    <li>Bakelite</li>
                    <li>Cable Tie</li>
                    <li>Cable Jointing Compound and Kit</li>
                    <li>Copper and Aluminium - DPC, DGC, Kapton film covering</li>
                    <li>Furnace Materials</li>
                    <li>Glass Fibre (Polyester and Epoxy) </li>
                    <li>Kapton</li>
                    <li>Mica (Silicon bonded paper mica) </li>
                    <li>Nomex</li>
                    <li>Nylon</li>
                    <li>Polyester</li>
                    <li>Polypropylene</li>
                    <li>PVC</li>
                    <li>Sindhaino</li>
                    <li>Teflon</li>
                    <li>Transformer Materials</li>
                    <li>Varnish and Thiner</li>
                    <li>Wires and Tapes</li>
                    <li>Other Major Products</li>
                </ul>
            </div>
        )
    }
}