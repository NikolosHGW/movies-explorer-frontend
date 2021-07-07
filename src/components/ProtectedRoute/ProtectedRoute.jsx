import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {
        () => localStorage.getItem('id') ? <Component {...props} /> : <Redirect to='/' />
      }
    </Route>
  );
}
