// import logo from './logo.svg';
// import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from './routes'
import Article from "./components/Article";

const App = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={idx}
        />
      ))}
    </Switch>
  );
};

export default withRouter(App);
