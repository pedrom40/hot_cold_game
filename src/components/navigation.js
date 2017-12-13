import React from 'react';
import './navigation.css';

export default function Navigation(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li><a className="what" onClick={e => props.onClick('what')}>What ?</a></li>
        <li><a className="new" onClick={e => props.onClick('new')}>+ New Game</a></li>
      </ul>
    </nav>
  )
}
