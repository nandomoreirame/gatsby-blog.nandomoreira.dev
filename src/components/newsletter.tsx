import React from 'react';
import { Newsletter } from '@styles';

const NewsletterComponent = ({
  src = 'https://nandomoreira.substack.com/embed',
}: {
  src: string;
}) => {
  return (
    <Newsletter.main>
      <Newsletter.inner>
        <Newsletter.title>Email Newsletter</Newsletter.title>
        <Newsletter.description>
          Receba uma atualização quando surgir algo novo inscrevendo-se abaixo!
        </Newsletter.description>
        <Newsletter.iframe src={src} width="480" height="320" frameBorder="0" scrolling="no" />
      </Newsletter.inner>
    </Newsletter.main>
  );
};

export default NewsletterComponent;
