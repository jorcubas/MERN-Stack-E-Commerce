import React from 'react';
require('dotenv').config()
const {REACT_APP_API_URL} = process.env;

export const ShowImage = ({item, url}) => (
    <div className="product-img">
        <img 
            src={`${REACT_APP_API_URL}/${url}/photo/${item._id}`} 
            alt={item.name} 
            className="mb-3" 
            style={{maxHeight: '100%', maxWidth: "100%"}}
        />
    </div>
)