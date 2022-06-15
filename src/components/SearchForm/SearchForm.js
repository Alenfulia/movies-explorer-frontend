import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search'>
      <form className='search__form'>
        <input type='search' className='search__input' placeholder='Фильм'/>
          <button className='search__button' type='submit'>Поиск</button>
      </form>
      <div className='search__switch'>
        <FilterCheckbox />
      </div>
    </section>
  )
}
export default SearchForm;
