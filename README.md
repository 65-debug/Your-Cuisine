# Your Cuisine 🍽️

A React-based website showcasing authentic recipes from every country in the world.

## Features

- 🌍 Browse recipes by country
- 🔍 Search recipes by ingredients or cuisine
- ❤️ Save favorite recipes
- ⭐ Rate recipes
- 💬 View recipe reviews
- 📱 Fully responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/65-debug/Your-Cuisine.git
   cd Your-Cuisine
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
Your-Cuisine/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── CountriesPage.js
│   │   ├── RecipeDetailPage.js
│   │   ├── SearchPage.js
│   │   └── FavoritesPage.js
│   ├── store/
│   │   └── recipeStore.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Zustand** - State management
- **Axios** - HTTP client (for future API integration)

## Available Routes

- `/` - Home page
- `/countries` - Browse recipes by country
- `/recipe/:id` - Recipe detail page
- `/search` - Search recipes
- `/favorites` - View favorite recipes

## Next Steps

1. Add a recipe database or API integration
2. Implement user authentication
3. Connect ratings and reviews functionality
4. Add recipe images and detailed information
5. Deploy to a hosting platform

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
