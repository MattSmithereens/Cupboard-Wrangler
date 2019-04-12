import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => (
  <div className='top-buffer'>
    <p>This page doesn't appear to exist</p>
    <p><Link to='/'>go home</Link></p>
  </div>
);

export default Error404