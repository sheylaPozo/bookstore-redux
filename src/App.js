import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BooksPage from './components/Books/BooksPage';
import Nav from './components/Nav';
import Categories from './components/categories/Categories';
import store from './redux/cofigureStore';
import './App.css';

const routes = [
  {
    path: '/',
    name: 'BOOKS',
    component: <BooksPage/>,
  },
  {
    path: '/categories',
    name: 'CATEGORIES',
    component: <Categories />,
  },
];

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="bookstore-cms">
        <Nav pageHeader="Bookstore CMS" routes={routes} />
        <Switch>
          {routes.map(({ path, component }) => (
            <Route path={path} exact key={path}>{component}</Route>
          ))}
        </Switch>
      </div>
    </Router>
  </Provider>

);

export default App;
