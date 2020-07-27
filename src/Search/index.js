import React from 'react';
import './index.css';
import SearchIcon from '@material-ui/icons/Search';

export default class Search extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div className="searchBar">
                    <SearchIcon fontSize={"large"} />
                    <input type="text" placeholder="Search for Products.." /> 
                    <input type="submit" value="Search" />

                    </div>
                </form>
            </div>
        )
    }
}