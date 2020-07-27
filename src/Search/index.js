import React from 'react';
import './index.css';
import SearchIcon from '@material-ui/icons/Search';

export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
            search:null
        };
    }
    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
        console.log(keyword);
    }
    render(){
        return(
            <div>
                <form>
                    <div className="searchBar">
                    <SearchIcon fontSize={"large"} />
                    <input type="text" placeholder="Search for Products.." onChange={(e)=>this.searchSpace(e)}/> 
                    <input type="submit" value="Search" />

                    </div>
                </form>
            </div>
        )
    }
}