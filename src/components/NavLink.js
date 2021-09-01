import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  const { title } = props;
  switch (title) {
    case 'Bookstore CMS':
      return <span><Link to="/">{title}</Link></span>;
    case 'Books':
      return <span><Link to="/">{title}</Link></span>;
    case 'Categories':
      return <span><Link to="/categories">{title}</Link></span>;
    default:
      return <span>{title}</span>;
  }
};

NavLink.defaultProps = {
  title: '',
};

NavLink.propTypes = {
  title: PropTypes.string,
};

export default NavLink;
