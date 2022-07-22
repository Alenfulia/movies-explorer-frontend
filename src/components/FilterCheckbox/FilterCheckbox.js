import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ checkBoxClick, isShort }) => {
  return (
    <div className='switch'>
      <input
        className='switch__checkbox'
        type='checkbox'
        onChange={checkBoxClick}
        checked={isShort}
      />
      <span className='switch__text'>Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
