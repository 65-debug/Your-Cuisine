import React from 'react';
import useRecipeStore from '../store/recipeStore';

function FavoritesPage() {
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div className="app-container">
      <div className="page-content">
        <h1 className="section-title">Your Favorite Recipes</h1>
        {favorites.length === 0 ? (
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <p>You haven't added any favorites yet. Explore recipes and add your favorites!</p>
          </div>
        ) : (
          <div className="grid-container">
            {favorites.map((recipeId) => (
              <div key={recipeId} className="card">
                <div className="card-content">
                  <h3 className="card-title">Recipe {recipeId}</h3>
                  <p className="card-description">Your favorite recipe</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
