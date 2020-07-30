import React from 'react';
import './index.css';
import productDetails from '../productDetails-json'
import {Link} from 'react-router-dom';

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
        return(
            <div> 
                <ol>
                    {this.props.searchResults && this.props.searchResults.map((productId)=>{
                        let product=productDetails.find(productObj=>productObj.productId===productId);
                        return(
                        <li><Link to={"/product/"+product.productCategory+'-'+product.productName}>ECC | Products | {product.productCategory.replace(/_/g,' ')} | {product.productName.replace(/_/g,' ').replace(/\|/g,', ')}</Link></li>
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
        return(
            <div>
                <form>
                    <h4>Match: </h4>
                    <label><input name="allTerms" type="checkbox" checked={this.state.showAllTermsMatched} onChange={this.handleChange} />All terms matched</label>
                    <label><input name="someTerms" type="checkbox" checked={this.state.showSomeTermsMatched} onChange={this.handleChange} />Some Terms matched</label>
                </form>
                <h3>Search Results for : {searchWord}</h3>
                {skippedWords && skippedWords.length>0 ? <SkipList words={skippedWords} /> : null }
                {searchWord && this.state.showAllTermsMatched ? searchResultAllList && searchResultAllList.length>0 ? <DisplayMatchedResults searchResults={searchResultAllList} /> : <h4>No search results found!</h4> : null}
                {searchWord && this.state.showSomeTermsMatched ? searchResultSomeList && searchResultSomeList.length>0 ? <DisplayMatchedResults searchResults={searchResultSomeList} /> : 
                this.state.showAllTermsMatched ? null : <h4>No search results found!</h4> : null
                }
            </div>
        )
    }
}