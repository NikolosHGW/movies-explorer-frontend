import { Route, Switch } from 'react-router';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/movies'>
          <Movies />
        </Route>
      </Switch>
    </>
  );
}

export default App;
