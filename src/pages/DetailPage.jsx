import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilmsDetailApi } from '../redux/logic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/detail-page.css'

const DetailPage = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");

    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }

    dispatch(getFilmsDetailApi(id));
  }, []);

  const films = useSelector((state) => state.logic.films);
  const filmsDetail = useSelector((state) => state.logic.filmsDetail);
  const myFilm = films.filter((film) => film.id === id);
  const currentFilm = myFilm[0] || filmsDetail;

  const handleBack = () => {
    navigate('/home');
  }

  if(!authenticated){
    navigate('/');
  } else {
    return (
      <div className="detail-page">
        <div
          className="background-image"
          style={{
            background: `url(${currentFilm.movie_banner})`,
          }}
        ></div>
        <div className="movie" id="movie-card">
          <div className="movie__data" id="movie-data">
            <div className="movie__poster">
              <span className="movie__poster--fill">
                <img alt="film-banner" src={currentFilm.movie_banner} />
              </span>
              <span className="movie__poster--featured">
                <img alt="film-img" src={currentFilm.image} />
              </span>
            </div>
            <div className="movie__details">
              <h2 className="movie__title">{currentFilm.title}</h2>
              <ul className="movie__tags list--inline">
                <li className="movie__jpTitle">{currentFilm.original_title}</li>
                <li className="movie__rated">{currentFilm.rt_score}/100</li>
                <li className="movie__year">{currentFilm.release_date}</li>
              </ul>
              <p className="movie__plot">{currentFilm.description}</p>
              <div className="movie__credits">
                <p>
                  <strong>Produced by:</strong> {currentFilm.producer}
                </p>
                <p>
                  <strong>Directed by:</strong> {currentFilm.director}
                </p>
              </div>
              <button
                onClick={handleBack}
              >
                BACK
              </button>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailPage
