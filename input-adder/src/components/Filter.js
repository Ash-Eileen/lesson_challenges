import React, { useState, useEffect } from 'react';
import { films } from '../data/films';

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedFilms, setDisplayedFilms] = useState(films);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = films.filter((film) =>
      film.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedFilms(results);
  }, [searchTerm]);

  return (
    <div>
      <h1>Search For a Film</h1>
      <input value={searchTerm} onChange={handleChange}></input>
      {displayedFilms.map((film) => {
        return <p>{film}</p>;
      })}
    </div>
  );
};

export default Filter;
