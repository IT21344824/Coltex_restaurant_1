// MenuContent.js
import React from 'react';
import { menuItems } from './MenuItemDetails'; 
import { useNavigate } from 'react-router-dom'; 
import '../../styles/RiceMenu.css';

const MenuContent = () => {
  const navigate = useNavigate(); 

  const handleCustomizeClick = (itemId) => {
    navigate(`/Customize?item=${itemId}`); 
  };

  // Function to handle navigation to the Cart page
  const handleAddToCartClick = () => {
    console.log('Add to Cart button clicked'); 
    navigate('/cart'); 
  };


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
            <button 
                className="customize-btn"
                onClick={() => handleCustomizeClick(item.id)}
              >
                Customize
              </button>
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCartClick}
              >
                Add to Cart
              </button>
              {console.log('Rendering Add to Cart button')} {/* Debugging log */}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MenuContent;
