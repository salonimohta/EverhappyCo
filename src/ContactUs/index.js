import React from 'react';
import './index.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import axios from 'axios';
import { Thumbs } from 'react-responsive-carousel';


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            correctContact: false,
            showContactMessage: false,
            correctEmail: false,
            showEmailMessage: false,
            currentCountryCode: "IN",
            name: null,
            address: null,
            contact: null,
            email: null,
            enquiryMessage: null
        };
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    /*componentDidMount(){
        fetch('https://geoip-db.com/json/').then(response => {
            if (response.ok) {
            console.log(response.json());
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
          .then(data => this.setState({ currentIp: data.IPv4, currentCountryCode:data.country_code }))
          .catch(error => this.setState({ error }));
    }*/
    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        if(this.state.correctEmail==false && this.state.showContactMessage==true && this.state.correctContact==false){
            alert('Please enter correct email and contact no. for the enquiry')
        }
        else if (this.state.correctEmail==false){
            alert('Please enter correct mail for enquiry');
        }
        else if (this.state.showContactMessage==true && this.state.correctContact==false){
            alert('Please enter correct contact no. for the enquiry');
        }
        else{
            await axios.post(
            'https://zfjqjfmdki.execute-api.us-east-2.amazonaws.com/default/sendEnquiryFunction-Py',
            {   name: this.state.name,
                contact: this.state.contact,
                email: this.state.email,
                address: this.state.address,
                message: this.state.enquiryMessage
            }
            );
        }
    }
    handleEmailChange(event){
        let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        this.setState({correctEmail: emailRegex.test(event.target.value),showEmailMessage:true,email: event.target.value});

    }
     render() {
        
         return (
             <div class="contactPage">
                 <div class="contactCard">
                    <h3><b><u>Office Address:</u></b></h3>
                    <h4>Todi Corner, 32, Ezra Street.<br/> Shop No 27<br/> Kolkata-700001.</h4>
                    <br/>
                    <h4><b>Contact: </b>Rajendra Kumar Mohta (9830162670)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Ashok Kumar Mohta (9830837581)</h4>
                    <h4><b>Email: </b>everhappycommercial@yahoo.co.in</h4>
                 </div>
                 <div>
                 <h3><b>Please fill out the form for an enquiry about a product!</b></h3>
                 <h4><span style={{color:"red"}}>Fields marked with * are required</span></h4>
                 <div class="container">
                    <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="col-25">
                            <label>Name<span style={{color:"red"}}>*</span></label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="name" placeholder="Your name.." onChange={(e)=>this.setState({name: e.target.value})} required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Address</label>
                        </div>
                        <div class="col-75">
                            <textarea id="address" placeholder="Your address.." style={{height:"100px"}} onChange={(e)=>this.setState({address: e.target.value})} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Contact No</label>
                        </div>
                        <div class="col-75">

                        <IntlTelInput preferredCountries={[this.state.currentCountryCode]} id="contact"
                          onPhoneNumberChange={(status, value, countryData, number, id) => {
                            this.setState({correctContact: status,showContactMessage:true,contact:number});
                          }}
                          />
                          {this.state.showContactMessage ? this.state.correctContact ? <span id="valid-msg">✓ Valid</span> : <span id="invalid-msg">Invalid Number</span> : null}         
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Email<span style={{color:"red"}}>*</span></label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="email" placeholder="Your email id.." onChange={this.handleEmailChange} required />
                            {this.state.showEmailMessage ? this.state.correctEmail ? <span id="valid-msg">✓ Valid</span> : <span id="invalid-msg">Invalid Email</span> : null}         

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Enquiry Detail<span style={{color:"red"}}>*</span></label>
                        </div>
                        <div class="col-75">
                            <textarea id="enquiry" placeholder="Send Enquiry" style={{height:"100px"}} onChange={(e)=>this.setState({enquiryMessage: e.target.value})} required />
                        </div>
                    </div>
                    <div class="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            </div>
             </div>
         )
     }
 }
