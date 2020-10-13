import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css'

export default class ProductCarousel extends React.Component{
    render(){
        return(
            <div>
                <h2 class="productTitle">Top Products at Everhappy Commercial Corporation</h2>
            <div class="carouselContainerProduct">
    <Carousel autoPlay infiniteLoop={true} stopOnHover={true} showArrows={false}>
        <div>
            <img alt="" src="https://3.imimg.com/data3/FA/XY/MY-4993915/insulating-varnish-500x500.jpg"/>
            <p className="legend">Dr. Beck Varnish</p>
        </div>
        <div>
            <img alt="" src="https://3.imimg.com/data3/CN/WR/MY-4993915/glass-fiber-sheet-250x250.jpg" />
            <p className="legend">Glass Fiber Sheet</p>
        </div>
        <div>
            <img alt="" src="https://5.imimg.com/data5/OP/JX/MY-2188633/grade-silicone-rubber-tape-500x500.jpg" />
            <p className="legend">3M High Voltage Tape</p>
        </div>
        <div>
            <img alt="" src="https://5.imimg.com/data5/SH/FG/MY-32720693/steelgrip-pvc-insulation-tape-500x500.jpg" />
            <p className="legend">Steel Grip PVC Tape</p>
        </div>
        <div>
            <img alt="" src="https://4.imimg.com/data4/LO/GC/MY-18468482/super-enamelled-copper-wire-500x500.jpg" />
            <p className="legend">KWW Super Enamel Cu Wire</p>
        </div>
        <div>
            <img alt="" src="https://5.imimg.com/data5/AQ/FQ/MY-9231191/dupont-pure-nomex-500x500.jpg" />
            <p className="legend">Dupont Nomex Paper</p>
        </div>
        <div>
            <img alt="" src="https://5.imimg.com/data5/XR/FS/OE/IOS-3425082/product-jpeg-250x250.png" />
            <p className="legend">Champion Asbestor Mill Board</p>
        </div>
        <div>
            <img alt="" src="https://sc02.alicdn.com/kf/HTB1EiCtbtzvK1RkSnfoq6zMwVXaF.jpg_640x640q50.jpg" />
            <p className="legend">Teflon Sheet</p>
        </div>
        <div>
            <img alt="" src="https://5.imimg.com/data5/NC/CN/SV/SELLER-12222695/fibre-glass-sleevings-500x500.jpg" />
            <p className="legend">Glass Varnish Sleeving</p>
        </div>
        <div>
            <img alt="" src="https://tiimg.tistatic.com/fp/1/005/122/lotus-brand-white-cotton-tape-758.jpg" />
            <p className="legend">Lotus Cotton Tape</p>
        </div>
    </Carousel>
    </div>
    </div>
        )
    }
}
