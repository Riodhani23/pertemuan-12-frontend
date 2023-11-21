import { useEffect, useState } from 'react';
import Button from './ui/Button';
import styled from 'styled-components';

const Hero = () => {
  const [movie, setMovie] = useState('');

  async function getDataApi() {
    const url = 'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590';

    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }

  useEffect(function () {
    getDataApi();
  }, []);
  console.log(movie);

  return (
    <HeroStyle>
      <div className="container">
        <section className="hero">
          <div className="hero__left">
            <h2 className="hero__title">{movie.Title}</h2>
            <h3 className="hero__genre">{movie.Genre}</h3>
            <p className="hero__descrption">{movie.Plot}</p>
            <Button variant="primary">Wach</Button>
            <Button variant="secondary">Trailer</Button>
          </div>
          <div className="hero__right">
            <img
              className="hero__image"
              src={movie.Poster}
              alt="placeholder"
            />
          </div>
        </section>
      </div>
    </HeroStyle>
  );
};

const HeroStyle = styled.div`
  .container {
    margin: 1rem;
  }

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__title {
    color: #ee8bdf;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  .hero__genre {
    color: #ee8bdf;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .hero__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #ee8bdf;
    color: #fff;
  }

  .hero__image {
    max-width: 120%;
    height: auto;
    margin-top: 1rem;
    border-radius: 25px;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero {
      margin: 1rem 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__right {
      margin-left: 1rem;
      flex-basis: 60%;
    }
  }
`;

export default Hero;
