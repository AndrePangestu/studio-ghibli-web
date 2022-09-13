const GET_FILMS = 'GET_FILMS';
const GET_FILMS_DETAIL = 'GET_FILMS_DETAIL';

const FILMS_URL = 'https://ghibliapi.herokuapp.com/films';
const initialState = {
  films: [],
  filmsDetail: {}
}

export const getFilmsAction = (payload) => ({
  type: GET_FILMS,
  payload,
});

export const getFilmsDetailAction = (payload) => ({
  type: GET_FILMS_DETAIL,
  payload,
});

export const getFilmsApi = () => async (dispatch) => {
  const response = await fetch(FILMS_URL);
  const films = await response.json();
  
  dispatch(getFilmsAction(films));
};

export const getFilmsDetailApi = (id) => async (dispatch) => {
  const response = await fetch(`${FILMS_URL}/${id}`);
  const filmsDetail = await response.json();

  dispatch(getFilmsDetailAction(filmsDetail));
};

const logic = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload
      }

    case GET_FILMS_DETAIL:
      return {
        ...state,
        filmsDetail: action.payload
      };

    default:
      return state;
  }
};

export default logic;
