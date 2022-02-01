import React from 'react';

const Categorywise = (props) => {
    document.querySelectorAll(".item")[0].classList.add("active");
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
