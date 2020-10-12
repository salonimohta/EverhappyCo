import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router,Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Brands from './Brands';
import Articles from './Articles';
import ContactUs from './ContactUs';
import Layout from './Layout';
import Acrylic from './ProductCategory/acrylic';
import Asbestos from './ProductCategory/asbestos';
import Bakelite from './ProductCategory/bakelite';
import CableJoint from './ProductCategory/cable-joint';
import CableTie from './ProductCategory/cable-tie';
import CopperAluminium from './ProductCategory/Cu-Al';
import Furnace from './ProductCategory/furnace';
import GlassFibre from './ProductCategory/glass-fibre';
import Kapton from './ProductCategory/kapton';
import Mica from './ProductCategory/mica';
import Nomex from './ProductCategory/nomex';
import Nylon from './ProductCategory/nylon';
import OtherMajorProducts from './ProductCategory/other-major-products';
import Polyester from './ProductCategory/polyester';
import Polypropylene from './ProductCategory/polypropylene';
import PVC from './ProductCategory/pvc';
import Sindhaino from './ProductCategory/sindhaino';
import Teflon from './ProductCategory/teflon';
import Transformer from './ProductCategory/transformer';
import VarnishThiner from './ProductCategory/varnish';
import WiresTapes from './ProductCategory/wires-tapes';
import ProductDetail from './ProductDetail'
import productDetails from './productDetails-json';
import Product from './Product';
import SearchResult from './SearchResult';

const routing = (
  <Router>
  <Layout>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/productCategories" component={Product} />
        <Route path="/brands" component={Brands} />
        <Route path="/articles" component={Articles} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/acrylic" component={Acrylic} />
        <Route path="/asbestos" component={Asbestos} />
        <Route path="/bakelite" component={Bakelite} />
        <Route path="/cable-joint" component={CableJoint} />
        <Route path="/cable-tie" component={CableTie} />
        <Route path="/Cu-Al" component={CopperAluminium} />
        <Route path="/furnace" component={Furnace} />
        <Route path="/glass-fibre" component={GlassFibre} />
        <Route path="/kapton" component={Kapton} />
        <Route path="/mica" component={Mica} />
        <Route path="/nomex" component={Nomex} />
        <Route path="/nylon" component={Nylon} />
        <Route path="/other-major-products" component={OtherMajorProducts} />
        <Route path="/polyester" component={Polyester} />
        <Route path="/polypropylene" component={Polypropylene} />
        <Route path="/pvc" component={PVC} />
        <Route path="/sindhaino" component={Sindhaino} />
        <Route path="/teflon" component={Teflon} />
        <Route path="/transformer" component={Transformer} />
        <Route path="/varnish" component={VarnishThiner} />
        <Route path="/wires-tapes" component={WiresTapes} />
        {productDetails.map((pro)=>{
          return <Route path={`/product/${pro.productCategory}-${pro.productName.replace(/\|/g,'_')}`} component={()=><ProductDetail aboutProduct={pro} />} />
        })}
        <Route path="/searchResults" component={SearchResult} />
        </Switch>
  </Layout>
  </Router>

  )
  
  ReactDOM.render(routing, document.getElementById('root'))
