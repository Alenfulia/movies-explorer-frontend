import React,  { useEffect, useState, useMemo } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

import './SavedMovies.css';



const SavedMovies = ({
  isLoading,
  savedMovies,
  onDislike,
  searchKeyword
 }) => {

  const [checkBoxActive, setCheckBoxActive] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [filter, setFilter] = useState('');
  const [noResults, setNoResults] = useState(true);



  const filterShortMovies = (filterMovies) =>
    filterMovies.filter((m) => m.duration < 40)

  const checkBoxClick = () => {
    setCheckBoxActive(!checkBoxActive);
    localStorage.setItem('checkBox', !checkBoxActive)
  }

  useEffect(() => {
    const checkBoxLocal = localStorage.getItem('checkBox')
    if (checkBoxLocal === 'true') {
      setIsShort(isShort)
      setCheckBoxActive(true)
    }
  }, [])

  useEffect(() => {
    if (filterMovies.lenght === 0) {
      setNoResults(false)
    }
  }, []);

  const filterMovies = useMemo(() =>
    savedMovies.filter((savedMovies) =>
        savedMovies.nameRU.toLowerCase().includes(filter.toLowerCase())
    ),
    [filter, savedMovies]
    );


  return (
    <section className='saved-movies'>
      <SearchForm
        onSubmit={setFilter}
        checkBoxClick={checkBoxClick}
        searchKeyword={searchKeyword}
        isShort={checkBoxActive}
      />
      {isLoading && <Preloader />}
      {!isLoading && (
        <MoviesCardList
        movies={checkBoxActive ? filterShortMovies(filterMovies) : filterMovies}
        onDislike={onDislike}
        savedMovies={savedMovies}
        noResults={noResults}
      />
      )}
    </section>
  )
}

export default SavedMovies;
