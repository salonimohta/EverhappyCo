import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

const ProductCategory = () => { 
    const history=useHistory();
    function redirectUrl(URLpath){
        history.push(URLpath);
    }
        return (
            <div>
                <h2 class="CategoryTitle">Product Category</h2>
            <div class="categoryFlex">
                
            <div class="categoryBox">
                <div>
                    <Button variant="light" onClick={()=>redirectUrl('/acrylic')}>Acrylic</Button>
                </div>
                <div>
                    <Button variant="light" onClick={()=>redirectUrl('/asbestos')}>Asbestos</Button>
                </div>
                <div>
                    <Button variant="light" onClick={()=>redirectUrl('/bakelite')}>Bakelite</Button>
                </div>
                <div>
                    <Button variant="light" onClick={()=>redirectUrl('/cable-tie')}>Cable Tie</Button>
                </div>
                <div>
                    <Button variant="light" onClick={()=>redirectUrl('/cable-joint')}>Cable jointing compound and kit</Button>
                </div>
                <div>
                    <Button variant="light" onClick={()=>redirectUrl('/Cu-Al')}>Copper and Aluminium (DPC,DGC,NPC,Kapton film covering)</Button>
                </div>
                <div>
                    <Button variant="light" onClick={()=>redirectUrl('/furnace')}>Furnace Materials</Button>
                </div>
                <div>
                    <Button variant="light" onClick={()=>redirectUrl('/glass-fibre')}>Glass Fibre ( Polyester and Epoxy)</Button>
                </div>
                <div>
                    <Button variant="light" onClick={()=>redirectUrl('/kapton')}>Kapton</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/mica')}>Mica (Silicon bonded paper mica)</Button>
                </div>
                </div>
                <div class="categoryBox">
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/nomex')}>Nomex</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/nylon')}>Nylon</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/polyester')}>Polyester</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/polypropylene')}>Polypropylene</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/pvc')}>PVC</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/sindhaino')}>Sindhaino</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/teflon')}>Teflon</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/transformer')}>Transformer Materials</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/varnish')}>Varnish and Thiner</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/wires-tapes')}>Wires and Tapes</Button>
                </div>
                <div>
                <Button variant="light" onClick={()=>redirectUrl('/Other_Major_Products')}>Other Major Products</Button>
                </div>
                
                
            </div>
        </div>
        </div>
        )
}

export default ProductCategory;

