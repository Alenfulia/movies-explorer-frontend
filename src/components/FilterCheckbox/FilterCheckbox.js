import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className='switch'>
      <input className='switch__checkbox' type='checkbox' />
      <span className='switch__text'>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
