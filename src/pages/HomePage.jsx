import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';
import { getFilmsApi } from '../redux/logic';

const HomePage = () => {
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }

    dispatch(getFilmsApi());
  }, []);

  const [searchText, setSearchText] = useState('');
  const films = useSelector((state) => state.logic.films);
  
  const filteredFilms = films.filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(searchText.toLocaleLowerCase())));

  if(!authenticated){
    navigate('/');
  } else {
    return (
      <>
        <Header/>
        <div className="HomePage">
          <div className="InputContainer">
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search films..." className="SearchInput" />
          </div>
          <div className="HomePageContainer">
            {
              filteredFilms.map((film) => (
                <Card
                  key={film.id}
                  filmKey={film.id}
                  title={film.title}
                  release={film.release_date}
                  image={film.image}
                />
              ))
            }
          </div>
        </div>
      </>
    );
  }
}

export default HomePage
