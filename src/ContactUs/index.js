import React from 'react';
import './index.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            emailAuthenticated: false,
            correctContact: false,
            showContactMessage: false,
            validEmail: false,
            showEmailMessage: false,
            currentCountryCode: "IN",
            name: null,
            address: "NA",
            contact: "NA",
            email: null,
            enquiryMessage: null
        };
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    async handleSubmit(event) {
        console.log(this.state)
        if(this.state.correctEmail===false && this.state.showContactMessage===true && this.state.correctContact===false){
            alert('Please enter correct email and contact no. for the enquiry')
        }
        else if (this.state.correctEmail===false){
            alert('Please enter correct mail for enquiry');
        }
        else if (this.state.showContactMessage===true && this.state.correctContact===false){
            alert('Please enter correct contact no. for the enquiry');
        }
        else{
            alert('sending enquiry!')
            fetch(process.env.REACT_APP_ENQUIRY_API,
            {
            method: "POST",
            body: JSON.stringify( { name: this.state.name, address: this.state.address, contact: this.state.contact, email:this.state.email, message:this.state.enquiryMessage } )
            })
        .then( res=>res.json()).then(res=> {
            //display message however you wish
            alert(res.body);
        });
        }
        event.preventDefault();
    }
    handleEmailChange(event){
        let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        this.setState({validEmail: emailRegex.test(event.target.value),showEmailMessage:true,email: event.target.value});

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
                            {this.state.showEmailMessage ? this.state.validEmail ? <span id="valid-msg">✓ Valid</span> : <span id="invalid-msg">Invalid Email</span> : null}         

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
