import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header>
    <h1 className="header-title">{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};

export default Header;
