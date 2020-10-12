import React from 'react';
import './index.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class ProductDetail extends React.Component {
     render() {
         return (
             <div className="productBox">
            <Tabs defaultIndex={0}>
            <TabList>
              <Tab>About</Tab>
              <Tab>Description</Tab>
              <Tab>Features</Tab>
            </TabList>
            <div className="productInfo">
                <div>
                    <img src={`${this.props.aboutProduct.imageURL}`} alt="" className="productImg" />
                </div>
                <div className="productContent">
                <TabPanel>
                    <h4>Name: {this.props.aboutProduct.productName.replace('_',' ')} </h4>
                    <h4>Category: {this.props.aboutProduct.productCategory.replace('_',' ')}</h4>
                    <h4>Specification: {this.props.aboutProduct.productSpecification ? this.props.aboutProduct.productSpecification : "To be Added"}</h4>
                </TabPanel>
                <TabPanel>
                    <h4>Description: {this.props.aboutProduct.productDescription ? this.props.aboutProduct.productDescription : "To be Added"}</h4>
                </TabPanel>
                <TabPanel>
                    <h4>Features: {this.props.aboutProduct.Features ? this.props.aboutProduct.Features : "To be Added"}</h4>
                </TabPanel>
                </div>
            </div>
             </Tabs>
                 </div>
                 

         )
     }
 }
