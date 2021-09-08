import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../App';
import './Service.css'
const Service = ({ data }) => {
   const [service,setService] = useContext(userContext);
    return (
        <div className="col-md-4">
            <Link to="/user-dashboard" >
            <div onClick={()=>setService(data)} className="service-container p-4 m-2 ">
                <div className="d-flex justify-content-center  ">
                    <img width="50px" className="img-fluid" src={`data:image/jpeg;base64,${data.image.img}`} alt="" />
                </div>
                <div className="service-content p-4  ">
                    <h4 className="h5 text-dark text-center ">{data.title}</h4>
                    <h5 className="h5 text-color-purple text-center"> ${data.price} </h5>
                    <p className="fs-base text-secondary text-center">{data.des} </p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Service;