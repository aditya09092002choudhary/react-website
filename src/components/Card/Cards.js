import React from 'react';
import './Card.css'
import Card from './Card';
import CardDetails from './CardDetails';

const Cards = () => {
    return (
        <div className='card-container'>
           {CardDetails.map((card)=>{
               return <Card key = {card.key} imgURL = {card.imgURL} title = {card.title} details = {card.details}  />
           })} 
        </div>
    );
}

export default Cards;
