import React from 'react';
import BookingForm from '../Book/BookingForm/BookingForm';
import UserLeftbar from '../UserLeftbar/UserLeftbar';

const UserDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                   <UserLeftbar></UserLeftbar>
                </div>
                <div className="col-md-9 order-list">
                <h2 className="h4">Book</h2>
                    <BookingForm></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;