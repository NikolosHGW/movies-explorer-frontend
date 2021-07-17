import { Route, Switch } from 'react-router';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import React from 'react';
import { authorize, logout, register } from '../../utils/auth';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { addMovie, deleteMovie, editInfoUser, getInfoUser, getMovies } from '../../utils/MainApi';
import { errorMessage500 } from '../../utils/constants';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [prevSearchedMovies, setPrevSearchedMovies] = React.useState([]);
  const [infoToolOpen, setInfoToolOpen] = React.useState({
    isOpen: false,
    isSuccess: false,
    text: '',
  });
  const history = useHistory();

  let userId = localStorage.getItem('id');

  const handleCloseTool = React.useCallback(() => {
    setInfoToolOpen(prev => ({ ...prev, isOpen: false, }));
  }, []);

  const handleSetInfoTool = React.useCallback((isSuccess, text) => {
    setInfoToolOpen({ isOpen: true, isSuccess, text, });
  }, []);

  const openInfoToolWithError = React.useCallback((err) => {
    setInfoToolOpen({
      isOpen: true,
      isSuccess: false,
      text: err.message,
    });
  }, []);

  const handleLogin = React.useCallback((email, password, setIsLoading) => {
    authorize(email, password)
      .then(res => {
        if (res._id) {
          localStorage.setItem('id', res._id);
          setIsLogged(true);
          history.push('/movies');
        }
      })
      .catch(err => {
        openInfoToolWithError(err);
        setIsLoading(false);
      });
  }, [history, openInfoToolWithError]);

  const handleRegister = React.useCallback((name, email, password, setIsLoading) => {
    register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch(err => {
        openInfoToolWithError(err);
        setIsLoading(false);
      });
  }, [handleLogin, openInfoToolWithError]);

  const handleLogout = React.useCallback(() => {
    logout()
      .then(() => {
        localStorage.clear();
        setIsLogged(false);
        history.push('/');
      })
      .catch(openInfoToolWithError);
  }, [history, openInfoToolWithError]);

  const handleEditProfile = React.useCallback((name, email) => {
    editInfoUser(name, email)
      .then(user => {
        setCurrentUser(user);
        setInfoToolOpen({
          isOpen: true,
          isSuccess: true,
          text: 'Данные профиля успешно изменены',
        });
      })
      .catch(openInfoToolWithError);
  }, [openInfoToolWithError]);

  const setUserInfo = React.useCallback(() => {
    getInfoUser()
      .then(res => {
        setCurrentUser(res);
        setIsLogged(true);
      })
      .catch(openInfoToolWithError);
  }, [openInfoToolWithError]);

  const saveMovie = React.useCallback((objMovie) => {
    addMovie(objMovie)
      .then(movie => {
        setSavedMovies(prev => [movie, ...prev]);
      })
      .catch(openInfoToolWithError);
  }, [openInfoToolWithError]);

  const removeMovie = React.useCallback((objMovie) => {
    deleteMovie(objMovie._id)
      .then(() => {
        setSavedMovies(prev => prev
          .filter(m => m.movieId !== objMovie.movieId));
      })
      .catch(openInfoToolWithError);
  }, [openInfoToolWithError]);

  React.useEffect(() => {
    if (userId) {
      setUserInfo();
    }
  }, [setUserInfo, userId]);

  React.useEffect(() => {
    if (isLogged) {
      getMovies()
      .then(savedMovies => setSavedMovies(savedMovies.filter(movie => {
        return movie.owner === userId;
      })))
      .catch(() => {
        openInfoToolWithError({ message: errorMessage500 });
        handleLogout();
      });
    }
  }, [openInfoToolWithError, userId, isLogged, handleLogout]);

  React.useEffect(() => {
    const prevResult = localStorage.getItem('previouslySearchResultMovies');
    if (prevResult) {
      setPrevSearchedMovies(JSON.parse(prevResult));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <ProtectedRoute
          path='/movies'
          component={Movies}
          handleSetInfoTool={handleSetInfoTool}
          saveMovie={saveMovie}
          removeMovie={removeMovie}
          savedMovies={savedMovies}
          prevSearchedMovies={prevSearchedMovies}
          setPrevSearchedMovies={setPrevSearchedMovies}
        />
        <ProtectedRoute
          path='/saved-movies'
          component={SavedMovies}
          savedMovies={savedMovies}
          handleSetInfoTool={handleSetInfoTool}
          removeMovie={removeMovie}
        />
        <ProtectedRoute
          path='/profile'
          component={Profile}
          onLogout={handleLogout}
          handleEditProfile={handleEditProfile}
        />
        <Route path='/signup'>
          <Register onRegister={handleRegister} />
        </Route>
        <Route path='/signin'>
          <Login
            onLogin={handleLogin}
            setUserInfo={setUserInfo}
          />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>

      <InfoTooltip
        isOpen={infoToolOpen.isOpen}
        onClose={handleCloseTool}
        isSuccess={infoToolOpen.isSuccess}
        text={infoToolOpen.text}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
