import React from 'react';
import './index.css';
const API = 'https://geoip-db.com/json/';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        
            this.state = {
              hits: [],
        isLoading: false,
            };
        
        this.setStateHandler = this.setStateHandler.bind(this);
        
        }
        setStateHandler() {
            this.setState({ isLoading: true });
            
            fetch(API).then(response => {
                    if (response.ok) {
                        console.log(this.state.isLoading);
                      return response.json();
                    } else {
                      throw new Error('Something went wrong ...');
                    }
                  })
                  .then(data => this.setState({ hits: data.IPv4, isLoading: false }))
                  .catch(error => this.setState({ error, isLoading: false }));
              }
            
        
     render() {
         return (
            <div>
              <button onClick={this.setStateHandler}>Click</button>
            <h2>{this.state.hits}</h2>
            </div>
             /*
             <div class="welcomeHome">
                 <b>Welcome to Everhappy Commercial Corporation</b>
             </div>
             */
         )
     }
 }
