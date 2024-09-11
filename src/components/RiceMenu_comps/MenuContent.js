// MenuContent.js
import React from 'react';
import { menuItems } from './MenuItemDetails'; // Importing the menu items data
import '../../styles/RiceMenu.css';

const MenuContent = () => {
  return (
    <main>
      <section className="menu">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Ingredients: {item.ingredients.join(', ')}</p>
            <div className="price">
              <span>${item.price}</span>
              <div className="quantity-controls">
                <button>-</button>
                <input type="number" value="1" />
                <button>+</button>
              </div>
            </div>
            <div className="actions">
              <button className="customize-btn">Customize</button>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MenuContent;
