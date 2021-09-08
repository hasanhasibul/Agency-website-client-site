import React from 'react';
import LeftBar from '../LeftBar/LeftBar';
import './Dashboard.css'
import OrderList from '../OrderList/OrderList';
import OrderShortList from '../OrderList/OrderShortList/OrderShortList';

const Dashboard = () => {
    return (
       <div className="container-fluid">
           <div className="row">
               <div className="col-md-3 h-100">
                   <LeftBar></LeftBar>
               </div>
               <div className="col-md-9 order-list">
               <h2 className="h4">Order List</h2>
                   <OrderShortList></OrderShortList>
               </div>
           </div>
       </div>
    );
};

export default Dashboard;