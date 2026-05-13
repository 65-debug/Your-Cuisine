import React, { useState } from 'react';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic will be implemented here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="app-container">
      <div className="page-content">
        <h1 className="section-title">Search Recipes</h1>
        <form onSubmit={handleSearch} style={{
          maxWidth: '600px',
          margin: '0 auto 30px',
          display: 'flex',
          gap: '10px'
        }}>
          <input
            type="text"
            placeholder="Search by ingredient, cuisine, or dish name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              padding: '12px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '5px'
            }}
          />
          <button type="submit">Search</button>
        </form>
        {results.length === 0 && (
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <p>Search results will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
