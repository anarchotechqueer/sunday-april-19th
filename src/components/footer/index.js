import React from 'react';
import './style.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__accent">// </span>
      <div classname="footer__text">
      	check out <a href="https://www.flatsound.org" target="_blank" rel="noopener noreferrer">the artist</a>, <a href="https://www.youtube.com/watch?v=4x7Csbr-Owo" target="_blank" rel="noopener noreferrer">the song</a>, and <a href="https://github.com/novacourtois/sunday-april-19th" target="_blank" rel="noopener noreferrer">the code</a>
      </div>
    </footer>
  );
};