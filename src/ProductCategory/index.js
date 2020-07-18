import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button'

export default class ProductCategory extends React.Component {
    render() {
        return (
            <div>
                <h2 class="CategoryTitle">Product Category</h2>
            <div class="categoryFlex">
                
            <div class="categoryBox">
                <div>
                    <Button variant="light">Acrylic</Button>
                </div>
                <div>
                    <Button variant="light">Asbestos</Button>
                </div>
                <div>
                    <Button variant="light">Bakelite</Button>
                </div>
                <div>
                    <Button variant="light">Cable Tie</Button>
                </div>
                <div>
                    <Button variant="light">Cable jointing compound and kit</Button>
                </div>
                <div>
                    <Button variant="light">Copper and Aluminium (DPC,DGC,NPC,Kapton film covering)</Button>
                </div>
                <div>
                    <Button variant="light">Furnace Materials</Button>
                </div>
                <div>
                    <Button variant="light">Glass Fibre ( Polyester and Epoxy)</Button>
                </div>
                <div>
                    <Button variant="light">Kapton</Button>
                </div>
                <div>
                <Button variant="light">Mica (Silicon bonded paper mica)</Button>
                </div>
                </div>
                <div class="categoryBox">
                <div>
                <Button variant="light">Nomex</Button>
                </div>
                <div>
                <Button variant="light">Nylon</Button>
                </div>
                <div>
                <Button variant="light">Polyester</Button>
                </div>
                <div>
                <Button variant="light">Polypropylene</Button>
                </div>
                <div>
                <Button variant="light">PVC</Button>
                </div>
                <div>
                <Button variant="light">Sindhaino</Button>
                </div>
                <div>
                <Button variant="light">Teflon</Button>
                </div>
                <div>
                <Button variant="light">Transformer Materials</Button>
                </div>
                <div>
                <Button variant="light">Varnish and Thiner</Button>
                </div>
                <div>
                <Button variant="light">Wires and Tapes</Button>
                </div>
                <div>
                <Button variant="light">Other Major Products</Button>
                </div>
                
                
            </div>
        </div>
        </div>
        )
    }
}

