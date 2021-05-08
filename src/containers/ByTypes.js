import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesStartAsync, fetchPokemonByCategory } from '../actions/getData';
import { setNewFilter } from '../actions/actionTypes';
import TypeDisplayer from '../components/TypeDisplayer';

const CategoryTypes = () => {
  const stateCategories = useSelector(state => state.categories);
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

  const handleFilterChange = async event => {
    const url = event.target[event.target.selectedIndex].getAttribute('data-url');
    const categoryName = event.target.value;
    if (!Object.keys(fetchedCategories).includes(categoryName) && categoryName !== 'All') {
      dispatch(fetchPokemonByCategory(url, categoryName));
    }
    dispatch(setNewFilter(categoryName));
  };
  return (
    <>
      {!loading ? (
        <div>
          <select onChange={handleFilterChange} className="filter-select">
            <option value="All">Types</option>
            {categories.map(category => (
              <option key={category.name} data-url={category.url}>{category.name}</option>
            ))}
          </select>
          <div>
            {fetchedCategories[currentFilter] && currentFilter !== 'All' ? (
              <TypeDisplayer arrayPoke={fetchedCategories[currentFilter]} />
            ) : ('Please select a filter')}
          </div>
        </div>
      ) : (
        <h1>Pokemon Not Found</h1>
      )}
    </>
  );
};

export default CategoryTypes;
