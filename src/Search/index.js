import React from 'react';
import './index.css';
import SearchIcon from '@material-ui/icons/Search';

export default class Search extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div className="searchBar">
                    <input type="text" placeholder="Search for Products.." /> 
                        <SearchIcon fontSize={"large"} />

                    </div>
                </form>
            </div>
        )
    }
}