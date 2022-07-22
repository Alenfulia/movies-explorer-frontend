import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

const SearchForm = ({ onSubmit, checkBoxClick, searchKeyword, isShort }) => {

  const location = useLocation();

  const [movie, setMovies] = useState('');

  useEffect(() => {
    if (searchKeyword && location.pathname === '/movies') {
      setMovies(searchKeyword);
    }
  }, []);

  const handleInputChange = (event) => {
    setMovies(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSubmit(movie);
  };

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSearch}>
        <input
          type='search'
          className='search__input'
          placeholder='Фильм'
          required={true}
          onChange={handleInputChange}
          value={movie}
        />
          <button className='search__button' type='submit'>Поиск</button>
      </form>
      <div className='search__switch'>
        <FilterCheckbox
          checkBoxClick={checkBoxClick}
          isShort={isShort}
        />
      </div>
    </section>
  )
}
export default SearchForm;
