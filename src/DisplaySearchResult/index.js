import React from 'react';
import {Link} from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import productDetails from '../productDetails-json';

export default class DisplayMatchedResults extends React.Component{
    render(){
        const searchWords=this.props.wordsToHighlight;
        const startIndex=this.props.startIndex;
        const searchResultList=this.props.searchResults;
        return(
            <div> 
                <ol start={startIndex}>
                    {
                        searchResultList.map((product)=>{
                        let productDetail=productDetails.find(productObj=>productObj.productId===product.productId);
                        return(
                            <div>
                        <li><Link to={"/product/"+productDetail.productCategory+'-'+productDetail.productName}>ECC | Products | {productDetail.productCategory.replace(/_/g,' ')} | {productDetail.productName.replace(/_/g,' ').replace(/\|/g,', ')}</Link></li>
                        {product.sectionMatched.includes('productName') ? <h4>Product Name: <Highlighter searchWords={searchWords} textToHighlight={productDetail.productName.replace(/_/g,' ')} autoEscape={false} /></h4> : null}                       
                        {product.sectionMatched.includes('productCategory') ? <h4>Product Category: <Highlighter searchWords={searchWords} textToHighlight={productDetail.productCategory.replace(/_/g,' ')} autoEscape={false} /></h4> : null}                       
                        {product.sectionMatched.includes('productSpecification') ? <h4>Specification: <Highlighter searchWords={searchWords} textToHighlight={productDetail.productSpecification} autoEscape={false} /></h4> : null}                       
                        {product.sectionMatched.includes('productDescription') ? <h4>Description: <Highlighter searchWords={searchWords} textToHighlight={productDetail.productDescription} autoEscape={false} /></h4> : null}                       
                        {product.sectionMatched.includes('Features') ? <h4>Features: <Highlighter searchWords={searchWords} textToHighlight={productDetail.Features} autoEscape={false} /></h4> : null}                       
                        <br/>
                        </div>
                        )
                    })}
                </ol> 
            </div>
        )
    }
}