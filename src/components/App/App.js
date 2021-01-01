
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainPage from "../../pages/MainPage";
import SearchPage from "../../pages/SearchPage";

const navLinks = [
  { title: 'MainPage', to: '/', component: <MainPage /> },
  { title: 'Search', to: '/search', component: <SearchPage /> }
]
const Navigation = () => (
  <nav>
    <ul>
      {
        navLinks.map(r =>
          <li key={r.to}>
            <Link to={r.to}>{r.title}</Link>
          </li>
        )
      }
    </ul>
  </nav>
)
const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
