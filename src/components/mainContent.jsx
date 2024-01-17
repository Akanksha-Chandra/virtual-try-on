// MainContent.js
import React from 'react';
import { Link } from 'react-router-dom';
import product_card from '../data/product_data';

const MainContent = () => {
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt={item.product_name} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        {/* Wrap the "Try it on" button with Link */}
        <div><Link to="/UploadPage" className="btn">
          Try it on
        </Link></div>
      </div>
    </div>
  ));

  return (
    <div className="main_content">
      <h3>Clothing</h3>
      {listItems}
    </div>
  );
};

export default MainContent;
