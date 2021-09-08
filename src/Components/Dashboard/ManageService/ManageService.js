import React from 'react';
import LeftBar from '../LeftBar/LeftBar';

const ManageService = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <LeftBar></LeftBar>
                </div>
                <div className="col-md-9">
                    ManageService
                </div>
            </div>
        </div>
    );
};

export default ManageService;