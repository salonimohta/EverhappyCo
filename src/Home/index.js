import React from 'react';
import './index.css';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCarousel from '../ProductCarousel';
import ProductCategory from '../ProductCategory';
import BrandCarousel from '../BrandCarousel';

export default class Home extends React.Component {
     render() {
         return (
             <div>
                 
             <ProductCarousel/>
             <ProductCategory/>
             <BrandCarousel/>
             
             </div>
         )
     }
 }
