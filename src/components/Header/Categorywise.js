import React from 'react';
import './Category.css';

const Categorywise = (props) => {
    function handleClick(e){
        e.preventDefault();
        e.target.classList.add('active');
    }
    return (
        <div className="item-container ">
            <a href="/" className="item-link">
                <div onClick={handleClick} className="item">
                    <li className='list-item'>{props.name}</li>
                </div>
            </a>
        </div>
    );
}

export default Categorywise;
