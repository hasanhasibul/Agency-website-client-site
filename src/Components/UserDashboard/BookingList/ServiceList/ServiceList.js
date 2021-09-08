import React from 'react';
import SingleService from '../SingleService/SingleService';
import jwt_decode from "jwt-decode";
import { useState, useEffect } from 'react';
const ServiceList = () => {
    const [serviceListData, setServiceListDetails] = useState([]);

    useEffect(()=>{
        const idToken = sessionStorage.getItem('idToken')
        let email ;
            if(idToken){
                const decodedIdToken = jwt_decode(idToken);
                email = decodedIdToken.email;
            }
      
        if (email) {
            fetch('https://damp-lake-99617.herokuapp.com/findBookingWithEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setServiceListDetails(data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },[])
    

    return (
        <div className="row">
            { serviceListData.length ?
                serviceListData.map((service) => <SingleService service={service}></SingleService>)
                : 
                <h2 className="h2 p-4 text-center"> No Service Booked Yet !! </h2>
            }
        </div>
    );
};

export default ServiceList;