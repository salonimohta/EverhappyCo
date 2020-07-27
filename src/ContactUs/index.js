import React from 'react';
import './index.css';

export default class Home extends React.Component {
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
                    <form>
                    <div class="row">
                        <div class="col-25">
                            <label>Name<span style={{color:"red"}}>*</span></label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="name" placeholder="Your name.." required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Address</label>
                        </div>
                        <div class="col-75">
                            <textarea id="address" placeholder="Your address.." style={{height:"100px"}} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Contact No<span style={{color:"red"}}>*</span></label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="contact" placeholder="Your phone no.." required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Email<span style={{color:"red"}}>*</span></label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="email" placeholder="Your email id.." required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Enquiry Detail<span style={{color:"red"}}>*</span></label>
                        </div>
                        <div class="col-75">
                            <textarea id="enquiry" placeholder="Send Enquiry" style={{height:"100px"}} required />
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
