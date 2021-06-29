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

function App() {
  const [infoToolOpen, setInfoToolOpen] = React.useState({
    isOpen: false,
    isSuccess: false,
    text: '',
  });
  const history = useHistory();

  const handleCloseTool = React.useCallback(() => {
    setInfoToolOpen(prev => ({ ...prev, isOpen: false, }));
  }, []);

  const handleSetInfoTool = React.useCallback((isSuccess, text) => {
    setInfoToolOpen({ isOpen: true, isSuccess, text, });
  }, []);

  const handleLogin = React.useCallback((email, password) => {
    authorize(email, password)
      .then(res => {
        if(res._id) {
          localStorage.setItem('id', res._id);
          history.push('/movies');
        }
      })
      .catch((err) => {
        setInfoToolOpen({
          isOpen: true,
          isSuccess: false,
          text: err.message,
        });
      });
  }, [history]);

  const handleRegister = React.useCallback((name, email, password) => {
    register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setInfoToolOpen(prev => ({
          ...prev,
          isOpen: true,
          isSuccess: false,
          text: err.message,
        }));
      });
  }, [handleLogin]);

  const handleLogout = React.useCallback(() => {
    logout()
      .then(() => {
        localStorage.removeItem('id');
        history.push('/signin');
      })
      .catch((err) => {
        setInfoToolOpen(prev => ({
          ...prev,
          isOpen: true,
          isSuccess: false,
          text: err.message,
        }));
      });
  }, [history]);

  return (
    <>
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
        />
        <Route path='/signup'>
          <Register onRegister={handleRegister} />
        </Route>
        <Route path='/signin'>
          <Login onLogin={handleLogin} />
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
    </>
  );
}

export default App;
