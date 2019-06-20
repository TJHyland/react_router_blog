import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <>
  <h2 color='rainbow'>Error 404 - Page not found</h2>
  <Link to='/'>
    To Homepage
  </Link>
  </>
)

export default NoMatch;