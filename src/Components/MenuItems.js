import React from 'react';

const MenuItems = ({ menuItems }) => {
    return (
        <div className="portfolios">
            {
                menuItems.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-item">
                                <li><a href={item.link1}>Live</a></li>
                                <li><a href={item.link2}>Code</a></li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>lorem lorem lorem</p>
                    </div>
                })
            }
        </div>
    );
};

export default MenuItems;