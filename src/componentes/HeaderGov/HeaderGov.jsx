import React from 'react';
import './HeaderGov.css';

export const HeaderGov = () => {
  return (
    <section className="headerGov">
      <div className="container">
        <div className="navbarGov">
          <a href="" className="logoGov">
            gov.br
          </a>
          <ul className="menu__gov">
            <li>
              <a href="">comunicar br</a>
            </li>
            <li>
              <a href="">acesso à informação</a>
            </li>
            <li>
              <a href="">participe</a>
            </li>
            <li>
              <a href="">legislação</a>
            </li>
            <li>
              <a href="">órgãos do governo</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
