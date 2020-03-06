import React from 'react';
import { Nav } from '@styles';

const NavComponent = ({ items }) => (
  <Nav.main role="navigation">
    {items.length > 0 &&
      items.map((item, i) => {
        return (
          <Nav.link
            key={i}
            href={item.link}
            target="_blank"
            title={item.title}
            aria-label={item.title}
            rel="noopener noreferrer"
            role="link"
          >
            {item.title}
          </Nav.link>
        );
      })}
  </Nav.main>
);

export default NavComponent;
