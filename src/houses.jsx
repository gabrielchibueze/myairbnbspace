import React from 'react'


export default function Houses (props){
    console.log(props)
   return(
     <div className='house-item'>
        <div className='house-props'>
            <img src={`./${props.photo}`} className='house-photo'/>
            <h3 className='house-name'>{props.name}</h3>
            <h5 className='house-location'>{props.location}</h5>
            <p className='house-desc.'>{props.description}</p>
            <div className='house-price-star' >
                <p className='house-price'><strong>Price:</strong> £{props.price} per month</p>
                <p className='house-rating'><strong>Rating:</strong> <i class="fa-solid fa-star"></i>{props.rating}/{props.ratingCount}</p>
            </div>
        </div>
    </div>
    )
}