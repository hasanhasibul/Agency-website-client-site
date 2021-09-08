import React from 'react';
import Testimonial from './Testimonial/Testimonial';
import { useState, useEffect } from 'react';

const Testimonials = () => {

    const [testimonial,setTestimonial]=useState([]);

        useEffect(()=>{
            fetch('http://localhost:5000/getReview')
            .then(res =>res.json())
            .then(data =>{
                setTestimonial(data)
            })
        },[])
    return (
        <div className="p-4" >
            <div className="container p-4">
                <h2 className="h2 text-center p-4"> Testimonials </h2>
                <div className="row p-4">
                    {
                        testimonial.map((data)=> <Testimonial data={data} ></Testimonial> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;