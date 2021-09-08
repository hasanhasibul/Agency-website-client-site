import React from 'react';
import LeftBar from '../LeftBar/LeftBar';
import ServiceForm from './ServiceForm/ServiceForm';

const AddSevices = () => {
    return (
        <div className="container-fluid">
            
            <div className="row">
                <div className="col-md-3">
                    <LeftBar></LeftBar>
                </div>
                <div className="col-md-9 order-list ">
                <h2 className="h4">Add New Service</h2>
                    <ServiceForm></ServiceForm>
                </div>
            </div>
        </div>
    );
};

export default AddSevices;
