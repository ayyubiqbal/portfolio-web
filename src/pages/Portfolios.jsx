import React, { useState } from 'react';
// import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import Portfolio from '../Components/AllPortfolio';


// const allCategories = ['All', ...new Set(Portfolio.map(item => item.category))];
const Portfolios = () => {
    // const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(Portfolio);

    // const filter = (category) => {
    //     if (category === 'All') {
    //         setMenuItems(Portfolio);
    //         return;
    //     }
    //     const filterData = Portfolio.filter(item => item.category === category);
    //     setMenuItems(filterData);
    // }
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title="Portfolios" span={"Portfolios"} />
            </div>
            <div className="portfolios-data">
                {/* <Categories filter={filter} categories={categories} /> */}
                <MenuItems menuItems={menuItems} />
            </div>
        </div>
    );
};

export default Portfolios;