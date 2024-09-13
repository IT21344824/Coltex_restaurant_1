// src/components/CustomizeMixedRice/CustomizeMixedRiceContent.js
import React from 'react';
import { options } from './OptionDetails';
import '../../styles/CustomizeMixedRice.css';

const CustomizeMixedRiceContent = () => {
  return (
    <main>
      <h2>Choose Your Rice to Start Mixing</h2>

      {Object.entries(options).map(([category, items]) => (
        <section key={category} className="options-section">
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="options-container">
            {items.map((item) => (
              <div key={item.id} className="option-box">
                <img src={item.img} alt={item.name} />
                <label>
                  {item.name} <input type="checkbox" />
                </label>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Price and Order Controls */}
      <div className="order-section">
        <div className="price">
          <span>Price: $50</span>
          <div className="quantity-controls">
            <button>-</button>
            <input type="number" value="1" />
            <button>+</button>
          </div>
        </div>

        <div className="actions">
          <button className="confirm">Confirm & Add to Cart</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </main>
  );
};

export default CustomizeMixedRiceContent;
