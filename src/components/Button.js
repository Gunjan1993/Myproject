import React from 'react';
import '../styles/button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/donatenow'>
      <button className='btn'>Donate now</button>
    </Link>
  );
}

export default Button