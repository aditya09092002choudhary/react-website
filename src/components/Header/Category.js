import React from 'react';
import AllCategory from './AllCategory';
import Categorywise from './Categorywise';

const Category = () => {

    return (
        <div className='category-container'>
            <div className="category-ul">
                <ul className="item-ul">
                    <div className="ul-items">
                        {AllCategory.map((category) => {
                            return <Categorywise key={category.key} name={category.name} />
                        })}
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Category;
