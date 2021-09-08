import React, { useState } from 'react';

const ReviewForm = () => {
const [review,setReview] = useState({});
const [file,setFile] = useState(null)
    const handleBlur=(e)=>{
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const handleChange =(e)=>{
        const newfile = e.target.files[0];
        setFile(newfile)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("click submit");
        const formData = new FormData();
        formData.append('file',file);
        formData.append('name',review.name);
        formData.append('company',review.company);
        formData.append('dasig',review.dasig);
        formData.append('des',review.des);
        formData.append('star',review.star);


        fetch('http://localhost:5000/addReview',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            alert("Review added successfully")
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div className="row">
                    <div className="col-md-8">
                        <input name="name" onBlur={handleBlur} placeholder="Your Name" type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br />
                        <input name="company" onBlur={handleBlur} placeholder="Company Name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br />
                        <input name="dasig" onBlur={handleBlur} placeholder="Dasignation" size='sm' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br />
                        <textarea name="des" onBlur={handleBlur} col="4" row="4" placeholder="Description" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br />
                        <input name="star" onBlur={handleBlur} placeholder="Number Of Start " size='sm' type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br />
                        <input onChange={handleChange} placeholder="Upload" size='sm' type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br />
                    </div>
                </div>
                <br />
                <input className="login-button" type="submit" value="send review" />
            </form>
        </div>
    );
};

export default ReviewForm;