import React from 'react';
import { Nav } from '@styles';

type ItemProps = {
  title: string;
  link: string;
};

const NavComponent = ({ items }: { items: ItemProps[] }) => (
  <Nav.main role="navigation">
    {items.length > 0 &&
      items.map((item, i) => {
        return (
          <Nav.link key={i} to={item.link} title={item.title} aria-label={item.title} role="link">
            {item.title}
          </Nav.link>
        );
      })}
  </Nav.main>
);

export default NavComponent;
