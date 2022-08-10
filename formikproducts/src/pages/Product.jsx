import React from 'react'

const Product = (props) => {
  return (
    <div className='col-lg-4'>
        <div className="img">
            <img src={props.image} alt="" />
        </div>
        <div className="text">
            <h3>Name: {props.name}</h3>
            <span>Price: {props.price}</span>
        </div>
    </div>
  )
}

export default Product