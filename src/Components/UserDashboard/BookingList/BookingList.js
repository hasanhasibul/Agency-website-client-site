import React from 'react';
import UserLeftbar from '../UserLeftbar/UserLeftbar';
import ServiceList from './ServiceList/ServiceList';

const BookingList = () => {
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-3">
                <UserLeftbar></UserLeftbar>
            </div>
            <div className="col-md-9 order-list">
                <h2 className="h4">Your Booking List</h2>
               <ServiceList></ServiceList>
            </div>
            </div>
        </div>
    );
};

export default BookingList;