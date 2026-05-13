import React, { useState } from 'react';

function CountriesPage() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Greece', flag: '🇬🇷' },
  ];

  return (
    <div className="app-container">
      <div className="page-content">
        <h1 className="section-title">Browse Recipes by Country</h1>
        <div className="grid-container">
          {countries.map((country) => (
            <div key={country.name} className="card" onClick={() => setSelectedCountry(country.name)}>
              <div style={{ fontSize: '4rem', textAlign: 'center', padding: '30px' }}>
                {country.flag}
              </div>
              <div className="card-content">
                <h3 className="card-title">{country.name}</h3>
                <p className="card-description">Explore authentic recipes from {country.name}</p>
                <button>View Recipes</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountriesPage;
