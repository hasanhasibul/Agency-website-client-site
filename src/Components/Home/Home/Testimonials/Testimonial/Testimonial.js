import React from 'react';
import Star from '../Star/Star';

const Testimonial = ({ data }) => {

    return (
        <div className="col-md-4 p-2">
            <div className="testimonial">
                <div className="test-image-div p-2 row ">
                    <div className="col-md-4" >
                        <img width="60px" className="img-fluid" src={`data:image/jpeg;base64, ${data.image.img}`} alt="" />
                    </div>
                    <div className="col-md-8" >
                        <h4 className="h4 text-dark "> {data.name} </h4>
                        <h6 className="h6 text-secondary "> {data.dasig} , {data.company} </h6>
                    </div>
                </div>
                <div className="tes-des">
                    <p className="fs-sm text-secondary p-2">
                        {data.des}
                    </p>
                    <div className="row pl-2" >
                        <Star starCount={data.star} ></Star>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;