import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ pageHeader, routes }) => (
  <nav className="nav">
    <Link to="/">{pageHeader}</Link>
    <ul className="nav-links">
      {routes.map(({ name, path }) => (
        <li key={path} className="nav-link">
          <NavLink exact to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  pageHeader: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Nav;
