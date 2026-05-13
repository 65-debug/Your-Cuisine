import create from 'zustand';

const useRecipeStore = create((set) => ({
  favorites: [],
  ratings: {},

  toggleFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites.filter((id) => id !== recipeId)
        : [...state.favorites, recipeId],
    })),

  isFavorite: (recipeId) => (state) => state.favorites.includes(recipeId),

  addRating: (recipeId, rating) =>
    set((state) => ({
      ratings: {
        ...state.ratings,
        [recipeId]: rating,
      },
    })),

  getRating: (recipeId) => (state) => state.ratings[recipeId] || 0,

  getFavorites: (state) => state.favorites,
}));

export default useRecipeStore;
