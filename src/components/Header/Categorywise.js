import React from 'react';
import './Category.css';

const Categorywise = (props) => {
    return (
        <div className="item-container ">
            <a href="/" className="item-link">
                <div className="item ">
                    <li className='list-item'>{props.name}</li>
                </div>
            </a>
        </div>
    );
}

export default Categorywise;
