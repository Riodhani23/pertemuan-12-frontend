import React, { useState } from 'react';
import styled from 'styled-components';

const AddMovie = (props) => {
  //props yang data nya berasal dar main
  const { movies, setMovies } = props;

  // state yang menghandle proses inputan
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');
  const [genre, setGenre] = useState('');

  // arrow function manghandlw inputan title
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // arrow function menghandle inputan date
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const genreOptions = ['Action', 'Comedy', 'Drama', 'Sci-Fi']; // Add your list of genre

  // arrow func menghandle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' && date === '') {
      alert('title dan date kosong');
    } else if (title === '') {
      alert('title kosong');
    } else if (date === '') {
      alert('date kosong');
    } else {
      const movie = {
        id: 4,
        title: title,
        date: date,
        Image: link,
        genre: genre,
      };
      setMovies([...movies, movie]);
      alert('berhasil menambahkan movie');
    }
  };

  return (
    <AddNovieStyle>
      <div className="container">
              <form
        className="addmovie"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="masukan judul"
          className="addmovie__input"
          id="title"
          type="text"
          value={title}
          onChange={handleTitle}
        />
        <input
          placeholder="masukan link"
          className="addmovie__input"
          id="link"
          type="text"
          value={link}
          onChange={handleLink}
        />
        <select
          className="addmovie__input"
          id="genre"
          value={genre}
          onChange={handleGenre}
          placeholder="Masukkan genre"
        >
          <option
            value=""
            disabled
          >
            Select a genre
          </option>
          {genreOptions.map((option, index) => (
            <option
              key={index}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
        <input
          placeholder="masukan tanggal"
          className="addmovie__input"
          id="date"
          type="date"
          value={date}
          onChange={handleDate}
        />
        <br />
        <button className="addmovie_button">simpan</button>
      </form>
      </div>
    </AddNovieStyle>
  );
};

const AddNovieStyle = styled.div`
  .container {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .addmovie {
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    border-radius: 15px;
    border-style: solid;
    background-color: #ee8bdf;
    border-color: rgb(158, 44, 130);
  }

  .addmovie__title {
    margin-top: 1rem;
    color: white;
    text-align: center;
    font-size: 1.6rem;
  }

  .addmovie__input {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 2px;
    margin: 1rem;
    width: 250px;
    height: 30px;
  }

  .addmovie__button {
    text-align: center;
    margin: 1rem;
    width: 250px;
    height: 30px;
    border: none;
    color: white;
    background-color: burlywood;
  }

  @media (min-width: 768px) {
    .addmovie {
      margin: 8px;
      max-width: 330px;
      height: auto;
    }
    .addmovie__input {
      width: 260px;
    }
  }
`;

export default AddMovie;
