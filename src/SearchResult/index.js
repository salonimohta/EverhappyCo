import React from 'react';
import './index.css';
import DisplayMatchedResults from '../DisplaySearchResult'

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