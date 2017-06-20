import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Anchor from 'grommet/components/Anchor';

const LinkAnchor = (props) => (
  <Link to={props.to}>
    <Anchor tag='span'>{props.children}</Anchor>
  </Link>
);

LinkAnchor.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};

export default LinkAnchor;
