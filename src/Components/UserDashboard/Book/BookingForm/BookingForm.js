import React, { useContext } from 'react';
import { userContext } from '../../../../App';
import StripeCard from '../../../StripeCard/StripeCard';
import { useState } from 'react';

const BookingForm = () => {
    const [service,setService,loginInfo,setLoginInfo] = useContext(userContext);
    console.log(service);
    const [bookData,setBookData]=useState({});
    const handleBlur =(e)=>{
        const newboking = {...bookData}
        newboking[e.target.name]=e.target.value;
        setBookData(newboking)
    }

    const handlePayment =(paymentDetails)=>{
        const paymentData = {...bookData, ...service, ...paymentDetails}

        fetch('https://damp-lake-99617.herokuapp.com/addPayment',{
            method:'POST',
            body:JSON.stringify(paymentData),
            headers:{'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
           
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    
    return (
        <div style={{ backgroundColor: 'white' }} className="container p-4" >
            <form className="row p-4" >
                <div class=" p-4 col-md-8">
                    <div>
                        <input onBlur={handleBlur} name="name" placeholder="Your Name" type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br />
                        <input onBlur={handleBlur} name="email" placeholder="Your Email" value={loginInfo.email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br />
                        <input onBlur={handleBlur} name="title" value={service.title} placeholder="Service title" size='sm' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div>
                       <StripeCard handlePayment={handlePayment} ></StripeCard>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;