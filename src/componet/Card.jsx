// import React from 'react'

const Card = ({
  title, description,imgUrl}) => {
  
  return (
    <div className="bg-gray-400 border-2 p-10 m-5" >
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt=''/>

    </div>

  )
}

export default Card;
