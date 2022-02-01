import React from 'react';
import './Header.css'
import Category from './Category.js'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-heading">
                <h2 className="heading">Crypto Currency</h2>
            </div>
            <div className="tagLine">
                <p>✔ The new level of currency. Invest now, you'll never regret it.</p>
            </div>
            <div className="category">
                <Category />  {/*All Categories*/}
            </div>
        </div>
    );
}

export default Header;
