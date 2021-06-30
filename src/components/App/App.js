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
import { editInfoUser, getInfoUser } from '../../utils/MainApi';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
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

  const handleLogin = React.useCallback((email, password) => {
    authorize(email, password)
      .then(res => {
        if(res._id) {
          localStorage.setItem('id', res._id);
          setIsLogged(true);
          history.push('/movies');
        }
      })
      .catch(openInfoToolWithError);
  }, [history, openInfoToolWithError]);

  const handleRegister = React.useCallback((name, email, password) => {
    register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch(openInfoToolWithError);
  }, [handleLogin, openInfoToolWithError]);

  const handleLogout = React.useCallback(() => {
    logout()
      .then(() => {
        localStorage.removeItem('id');
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

  React.useEffect(() => {
    if(localStorage.getItem('id')) {
      setUserInfo();
    }
  }, [setUserInfo, userId]);

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
        />
        <ProtectedRoute
          path='/saved-movies'
          component={SavedMovies}
        />
        <ProtectedRoute
          path='/profile'
          component={Profile}
          onLogout={handleLogout}
          isLogged={isLogged}
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
