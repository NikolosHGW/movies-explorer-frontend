import { Route, Switch } from 'react-router';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import React from 'react';

function App() {
  const [infoToolOpen, setInfoToolOpen] = React.useState({
    isOpen: false,
    isSuccess: false,
    text: '',
  });

  const handleCloseTool = React.useCallback(() => {
    setInfoToolOpen(prev => ({ ...prev, isOpen: false, }));
  }, []);

  const handleSetInfoTool = React.useCallback((isSuccess, text) => {
    setInfoToolOpen({ isOpen: true, isSuccess, text, });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies
            handleSetInfoTool={handleSetInfoTool}
          />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
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
