import React from 'react';
import UserLeftbar from '../UserLeftbar/UserLeftbar';
import ReviewForm from './ReviewForm/ReviewForm';

const Review = () => {
    return (
       <div className="container-fluid">
           <div className="row">
               <div className="col-md-3">
                   <UserLeftbar></UserLeftbar>
               </div>
               <div className="col-md-9 order-list">
                   <h2 className="h4">Review</h2>
                        <ReviewForm></ReviewForm>
               </div>
           </div>
       </div>
    );
};

export default Review;