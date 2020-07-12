import React from 'react';
import './index.css';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCarousel from '../ProductCarousel';

export default class Home extends React.Component {
     render() {
         return (
             <div>
             <ProductCarousel/>
             <div class="welcomeHome">
                 <b>Welcome to Everhappy Commercial Corporation</b>
             </div>
             </div>
         )
     }
 }
