import React from 'react';
import './index.css';
import productDetails from '../productDetails-json'

export default class SearchResult extends React.Component{
    render(){
        const searchResultList=this.props.location.results;
        const skippedWords=this.props.location.wordsSkipped;
        const searchWord=this.props.location.valueSearched;
        return(
            <div>
                <h3>Search Results for : {searchWord}</h3>
        <h5>The following words are in the word skip list and has been removed from your search: </h5>

            </div>
        )
    }
}