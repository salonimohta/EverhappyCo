import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css'

export default class BrandCarousel extends React.Component{
    render(){
        return(
            <div class="carouselContainer">
    <Carousel autoPlay showThumbs={false} showStatus={false}>
        <div>
            <img alt="logo_slide1" src={require('./logo1.png')}/>
        </div>
        <div>
            <img alt="logo_slide2" src={require('./logo2.PNG')}/>
        </div>
        <div>
            <img alt="logo_slide3" src={require('./logo3.PNG')}/>
        </div>
        <div>
            <img alt="logo_slide4" src={require('./logo4.PNG')}/>
        </div>
    </Carousel>
    </div>
        )
    }
}
