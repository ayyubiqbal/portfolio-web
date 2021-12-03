import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ filter, categories }) => {
    return (
        <div className="buttons">
            {categories.map((category, i) => {
                return <button className="portfolio-btn" key={i} onClick={() => filter(category)}>{category}</button>
            })}
        </div>
    );
};

export default Categories;