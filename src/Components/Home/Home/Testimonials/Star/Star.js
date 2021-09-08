import React from 'react';
import starIcon from '../../../../../Image_Icon/Icon/Group 33040.png'
const Star = ({starCount}) => {
    let starArray = []
        for (let i = 0; i < starCount; i++) {
            starArray.push(i)
        }
        console.log(starArray);
    return (
        <div>
            {
              starArray.map((star)=> <img width="17px" src={starIcon} alt="" srcset="" /> )  
            }
        </div>
    );
};

export default Star;