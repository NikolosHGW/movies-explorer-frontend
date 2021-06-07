import { Route, Switch } from 'react-router';
import Main from '../Main/Main';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
    </>
  );
}

export default App;
