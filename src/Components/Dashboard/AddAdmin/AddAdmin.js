import React from 'react';
import LeftBar from '../LeftBar/LeftBar';
import AddAdminForm from './AddAdminForm';

const AddAdmin = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <LeftBar></LeftBar>
                </div>
                <div className="col-md-9 order-list ">
                <h2 className="h4">Add a new Admin</h2>
                    <AddAdminForm></AddAdminForm>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;