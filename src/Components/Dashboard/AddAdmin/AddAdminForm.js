import React, { useState } from 'react';

const AddAdminForm = () => {
    const [email, setEmail] = useState({});

    const handleBlur = (e) => {
        const newEmail = { ...email }
        newEmail[e.target.name] = e.target.value;
        setEmail(newEmail);
    }
    console.log(email);
    const handlSubmit = (e) => {
        e.preventDefault()

        console.log("click");
        fetch('https://damp-lake-99617.herokuapp.com/admin', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                alert("Admin Created Successfully")
            })
            .catch(error => {
                console.error('Error:', error);
                alert("something is wrong")
            });

           
    }
    return (
        <div style={{ backgroundColor: 'white' }} className="container p-4" >
            <form onSubmit={handlSubmit} className="row p-4" >
                <div class=" p-4 col-md-12">
                    <input  onBlur={handleBlur} name="email" placeholder="Add Admin Email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="d-flex justify-content-end" >
                    <input className="login-button" type="submit" value=" Add Admin" />
                </div>
            </form>
        </div>
    );
};

export default AddAdminForm;