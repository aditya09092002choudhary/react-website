import React from 'react';

const Card = (props) => {
    return (
        <div className="card-body">
            <div className="card">
                <div className="card-img">
                    <img src={props.imgURL} alt="logo" />
                </div>
                <div className="details">
                    <h3>{props.title}</h3>
                    <div><p>{props.details}</p></div>
                </div>
            </div>
        </div>
    );
}

export default Card;
