import React from 'react';
import './index.css';
import SearchIcon from '@material-ui/icons/Search';
import productDetails from '../productDetails-json';
import Select,{ components } from 'react-select';

const skipWords=[];

const searchList=productDetails.map(product=>{
    return{
        value: product.productCategory.replace(/_/g,' ')+' - '+product.productName.replace(/_/g,' ').replace(/\|/g,', '),
        label: product.productCategory.replace(/_/g,' ')+' - '+product.productName.replace(/_/g,' ').replace(/\|/g,', ')
    }
});

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
    }
    search(){
        console.log(this.state.search);
    }
    render(){
        /*
        const items = productDetails.filter((product)=>{
            if(this.state.search == null)
                return null;
            else if(product.productName.replace('_',' ').toLowerCase().includes(this.state.search.toLowerCase()) || product.productCategory.replace('_',' ').toLowerCase().includes(this.state.search.toLowerCase())){
                return product
            }
          }).map(product=>{
            return(
            <div>
              <ul>
              <li>
                    <span>{product.productName}</span>
                    <span>{product.productCategory}</span>
                </li>
              </ul>
            </div>
            )
          })
          */
          const DropdownIndicator = props => {
            return (
              <components.DropdownIndicator {...props}>
                <SearchIcon />
              </components.DropdownIndicator>
            );
          };
          const onKeyDown = e => {
              if (e.keyCode===13){
                  this.searchSpace(e);
                  this.search();
                  alert(e.target.value)
              }
          }
      
        return(
            <div style={{width:"300px"}}>
                <Select placeholder="Search for products.." options={searchList} components={{DropdownIndicator}} onKeyDown={onKeyDown} />
                {
                    /*<form>
                    <div className="searchBar">
                    <SearchIcon fontSize={"large"} />
                    <input type="text" placeholder="Search for Products.." onChange={(e)=>this.searchSpace(e)}/> 
                    {items}
                    </div>
                </form>
                */}
            </div>
        )
    }
}