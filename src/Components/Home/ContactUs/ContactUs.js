import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className="background-color p-4">
            <div className="container p-4">
                <h2 className="h2 lh-base text-center  ">Let Us Handle Your <br />  Screen <span className="text-color-purple"> Professionally </span> </h2>
                <div>
                    <form className="row p-4" >
                        <div class=" p-4 col-md-6">
                            <input placeholder="First Name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <br />
                            <input placeholder="Last Name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="p-4 col-md-6">
                            <input placeholder="Your Email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <br />
                            <input placeholder="Your Number" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="p-4">
                            <textarea placeholder="Message" className="form-control" rows="4" ></textarea>
                        </div>
                        <div className="d-flex justify-content-center" >
                            <input className="login-button" type="submit" value=" Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;