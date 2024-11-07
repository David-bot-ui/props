import React from 'react'
import './Card.scss'
const Card = ({name = "Скоро не будет", image ="https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif"}) => {
  return (
 <>
 <div className="card">
    <img src={image} alt="" />
    <h2>{name}</h2>
    <p>69 отзывов</p>
    <button>Купить</button>
 </div>
 
 
 </>
  )
}

export default Card