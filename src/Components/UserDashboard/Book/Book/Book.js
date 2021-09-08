import React from 'react';
import UserLeftbar from '../../UserLeftbar/UserLeftbar';
import BookingForm from '../BookingForm/BookingForm';

const Book = () => {
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

export default Book;