import React from 'react';
import Brand from '@components/brand';
import Nav from '@components/nav';
import { Header } from '@styles';
import { HeaderInterface } from '@types';

const SiteHeaderComponent = ({ title, desc }: HeaderInterface) => (
  <Header.main>
    <Header.inner>
      {title && <Brand title={title} desc={desc} />}
      <Nav
        items={[
          {
            title: 'newsletter',
            link: '/newsletter',
          },
        ]}
      />
    </Header.inner>
  </Header.main>
);

export default SiteHeaderComponent;
