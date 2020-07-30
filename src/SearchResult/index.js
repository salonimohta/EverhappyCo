import React from 'react';
import './index.css';
import productDetails from '../productDetails-json'
import {Link} from 'react-router-dom';
import Highlighter from "react-highlight-words";

class SkipList extends React.Component{
    render(){
        return(
            <div>
            <h5>The following words are in the word skip list and has been removed from your search: 
                {this.props.words && this.props.words.join(', ')}
            </h5>
            </div>
        )
    }
}

class DisplayMatchedResults extends React.Component{
    render(){
        const searchWords=this.props.wordsToHighlight;
        const startIndex=this.props.startIndex;
        return(
            <div> 
                <ol start={startIndex}>
                    {this.props.searchResults && this.props.searchResults.map((product)=>{
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
export default class SearchResult extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showAllTermsMatched: true,
            showSomeTermsMatched: false
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        event.target.name==='allTerms' ? this.setState({showAllTermsMatched: !this.state.showAllTermsMatched}) : this.setState({showSomeTermsMatched: !this.state.showSomeTermsMatched})
    }
    render(){
        const searchResultAllList=this.props.location.resultsForAllTerms;
        const searchResultSomeList=this.props.location.resultsForSomeTerms;
        const skippedWords=this.props.location.skippedWords;
        const searchWord=this.props.location.valueSearched;
        var wordsToHighlight=[];
        var regexExpToHighlight=[];
        if (searchWord){
            wordsToHighlight=searchWord.toLowerCase().split(' ');
            if (skippedWords){
                wordsToHighlight=wordsToHighlight.filter((elem)=>!skippedWords.includes(elem))
                regexExpToHighlight=wordsToHighlight.map((elem)=>'\\b'+elem+'\\b');
            }
        }
        return(
            <div>
                <form>
                    <h4>Match: </h4>
                    <label><input name="allTerms" type="checkbox" checked={this.state.showAllTermsMatched} onChange={this.handleChange} />All terms matched</label>
                    <label><input name="someTerms" type="checkbox" checked={this.state.showSomeTermsMatched} onChange={this.handleChange} />Some Terms matched</label>
                </form>
                <h3>Search Results for : {searchWord}</h3>
                {skippedWords && skippedWords.length>0 ? <SkipList words={skippedWords} /> : null }
                {searchWord && this.state.showAllTermsMatched ? searchResultAllList && searchResultAllList.length>0 ? <DisplayMatchedResults startIndex={1} searchResults={searchResultAllList} wordsToHighlight={regexExpToHighlight} /> : <h4>No search results found!</h4> : null}
                {searchWord && this.state.showSomeTermsMatched ? this.state.showAllTermsMatched ? searchResultSomeList && searchResultSomeList.length>0 ? <DisplayMatchedResults startIndex={searchResultAllList.length+1} searchResults={searchResultSomeList} wordsToHighlight={regexExpToHighlight} /> : null :
                searchResultSomeList && searchResultSomeList.length>0 ? <DisplayMatchedResults startIndex={1} searchResults={searchResultSomeList} wordsToHighlight={regexExpToHighlight} /> : <h4>No search results found!</h4> : null
                }
            </div>
        )
    }
}