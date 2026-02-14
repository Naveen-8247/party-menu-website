import React, { useState } from 'react';
import { GiKnifeFork } from "react-icons/gi"; 
import './index.css';

function Dishcard({ dish, isSelected, onAddDish, onRemoveDish, onViewIngredients }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDesc = () => setShowFullDesc(!showFullDesc);

  return (
    <div className="dish-card">
      <div className="dish-info">
        <div className="dish-header">
          <h3>{dish.name}</h3>
          <span className={`dish-type ${dish.type === 'VEG' ? 'veg' : 'nonveg'}`}></span>
        </div>
        <p className="dish-desc">
          {showFullDesc ? dish.description : `${dish.description.slice(0, 60)}...`}
          {dish.description.length > 60 && (
            <span className="readmore" onClick={toggleDesc}>
              {showFullDesc ? ' Read less' : ' Read more'}
            </span>
          )}
        </p>
        <button className="ingredient-btn" onClick={() => onViewIngredients(dish)}>
          <GiKnifeFork /> Ingredients
        </button>
      </div>
      <div className="dish-right">
        <img src={dish.image} alt={dish.name} className="dish-img" />
        {isSelected ? (
          <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>Remove</button>
        ) : (
          <button className="add-btn" onClick={() => onAddDish(dish.id)}>Add +</button>
        )}
      </div>
    </div>
  );
}

export default Dishcard;
