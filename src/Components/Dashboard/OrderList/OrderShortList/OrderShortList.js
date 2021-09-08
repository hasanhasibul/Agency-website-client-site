import React from 'react';
import { useState, useEffect } from 'react';


const OrderShortList = () => {

    const [booking, setBooking] = useState([]);
    const [status,setStatus] = useState({})
    const [statusId,setStatusId] = useState({})
   
   
    useEffect(() => {
        fetch('http://localhost:5000/getBooking')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooking(data)
            })
    }, [])

    const handleStatus = (id,e)=>{
        setStatus(e.target.value)
        setStatusId(id)
        // console.log(id,e.target.value);
        updateStatus(id,e.target.value)
    }
    console.log(status);
    console.log(statusId);

    const updateStatus =(statusId,status)=>{
        fetch(`http://localhost:5000/updateStatus/${statusId}`,{
                method:'PATCH',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({status:status})
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                if(data){
                    alert("Status Updated Successfully")
                }
            })
            .catch(err=>{
                console.log(err);
                alert(err.message)
            })
    }
    return (
        <div className="p-4 bg bg-white" >
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        booking.map((td) =>
                       
                            <tr>
                                <td> {td.name} </td>
                                <td>{td.email}</td>
                                <td>{td.title}</td>
                                <td>{td.paymentMethod}</td>
                                <td>
                                    <select defaultValue={status} onChange={(e)=>handleStatus(td._id,e)} class="form-select  form-select-sm" aria-label=".form-select-sm example">
                                        <option  value="pending">pending</option>
                                        <option value="Done">Done</option>
                                        <option value="processing">processing</option>
                                    </select>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default OrderShortList;