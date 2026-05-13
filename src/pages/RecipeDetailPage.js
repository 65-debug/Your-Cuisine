import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

function RecipeDetailPage() {
  const { id } = useParams();
  const [userRating, setUserRating] = useState(0);
  const { toggleFavorite, isFavorite, addRating } = useRecipeStore();
  const favorite = useRecipeStore((state) => state.favorites.includes(id));

  const handleRating = (rating) => {
    setUserRating(rating);
    addRating(id, rating);
  };

  return (
    <div className="app-container">
      <div className="page-content">
        <h1 className="section-title">Recipe Details</h1>
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2>Recipe ID: {id}</h2>
          <p>Recipe details will be loaded here based on the recipe ID.</p>
          <button onClick={() => toggleFavorite(id)}>
            {favorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
          <div style={{ marginTop: '20px' }}>
            <h3>Rate this Recipe:</h3>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  style={{
                    background: star <= userRating ? '#e74c3c' : '#ccc',
                    padding: '10px 15px'
                  }}
                >
                  ⭐ {star}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
