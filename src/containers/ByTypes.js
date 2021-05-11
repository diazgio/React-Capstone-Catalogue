/* eslint-disable arrow-parens */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesStartAsync, fetchPokemonByCategory } from '../actions/getData';
import { setNewFilter } from '../actions/actionTypes';
import TypeDisplayer from '../components/TypeDisplayer';

const CategoryTypes = () => {
  const stateCategories = useSelector((state) => state.categories);
  const {
    categories,
    loading,
    fetchedCategories,
    currentFilter,
  } = stateCategories;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);

  const handleFilterChange = async (event) => {
    const url = event.target[event.target.selectedIndex].getAttribute('data-url');
    const categoryName = event.target.value;
    if (!Object.keys(fetchedCategories).includes(categoryName) && categoryName !== 'All') {
      dispatch(fetchPokemonByCategory(url, categoryName));
    }
    dispatch(setNewFilter(categoryName));
  };
  return (
    <div className="pokedex-container">
      {!loading ? (
        <div className="typeContainer">
          <select onChange={handleFilterChange} className="filter-select">
            <option value="All">Types</option>
            {categories.map((category) => (
              <option key={category.name} data-url={category.url}>{category.name}</option>
            ))}
          </select>
          <div className="pokeDefaultContainer">
            {fetchedCategories[currentFilter] && currentFilter !== 'All' ? (
              <TypeDisplayer arrayPoke={fetchedCategories[currentFilter]} />
            ) : (
              <div className="Pokedefault">
                <h1>Please Select a Type of Pokemon</h1>
                <img src="https://www.nicepng.com/png/detail/228-2285786_pokedex-kanto-pokedex-de-kanto.png" alt="pokedefault" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <h1>Pokemon Not Found</h1>
      )}
    </div>
  );
};

export default CategoryTypes;
