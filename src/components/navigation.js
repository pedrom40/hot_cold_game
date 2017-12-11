import React from 'react';
import './navigation.css';

export default function Navigation() {
  return (
    <nav>
      <ul className="clearfix">
        <li><a className="what" href="#">What ?</a></li>
        <li><a className="new" href="#">+ New Game</a></li>
      </ul>
    </nav>
  )
}
