import React, { useState } from 'react';

const ServiceForm = () => {
    const [service,setService]= useState({});
    const [file,setFile]= useState(null);

    const handleBlur=(e)=>{
        const newService = {...service}
        newService[e.target.name] = e.target.value;
        setService(newService)
    }
    const handleFile=(e)=>{
        const file = e.target.files[0];
        setFile(file);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("cliked ");
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('price', service.price);
        formData.append('des', service.des);


        fetch('http://localhost:5000/addService',{
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data=>{
            alert("service added successfully")
            setService('')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    console.log(service);
    return (
        <div style={{ backgroundColor: 'white' }} className="container p-4" >
            <form onSubmit ={handleSubmit} className="row p-4" >
                <div class=" p-4 col-md-6">
                    <input  onBlur={handleBlur} name="title" placeholder="Service Title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="p-4 col-md-6">
                    <input onBlur={handleBlur} name="price" placeholder="Service Price" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="p-4 col-md-6">
                    <input onChange={handleFile} placeholder="Upload" type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="p-4">
                    <textarea onBlur={handleBlur} name="des" placeholder="Descriptions" className="form-control" rows="4" ></textarea>
                </div>
                <div className="d-flex justify-content-end" >
                    <input className="login-button" type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default ServiceForm;