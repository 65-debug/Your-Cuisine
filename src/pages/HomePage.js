import React from 'react';

function HomePage() {
  return (
    <div className="app-container">
      <div className="page-content">
        <h1 className="section-title">Welcome to Your Cuisine</h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '30px' }}>
          Explore authentic recipes from every country around the world.
        </p>
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '8px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2>Featured Content Coming Soon</h2>
          <p>Browse countries to find recipes, use the search feature, or save your favorite dishes!</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
