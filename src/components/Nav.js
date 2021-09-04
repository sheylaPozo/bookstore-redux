import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import './Nav.css';

const Nav = ({ pageHeader, routes }) => (
  <nav className="nav d-flex">
    <Link to="/">{pageHeader}</Link>
    <ul className="nav-links d-flex">
      {routes.map(({ name, path }) => (
        <li key={path} className="nav-link">
          <NavLink exact to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
    <Avatar className="avatar" />
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
