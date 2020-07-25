import React from 'react';
import './index.css';

export default class Product extends React.Component {
     render() {
         return (
             <div>
                 <img src={`${this.props.aboutProduct.imageURL}`} alt="" />
                 <h2>Name: {this.props.aboutProduct.productName} </h2>
                 <h2>Category: {this.props.aboutProduct.productCategory}</h2>
                 <h2>Specification: {this.props.aboutProduct.productSpecification}</h2>
                 <h2>Description: {this.props.aboutProduct.productDescription}</h2>
                 <h2>Features: {this.props.aboutProduct.Features}</h2>
            </div>
         )
     }
 }
