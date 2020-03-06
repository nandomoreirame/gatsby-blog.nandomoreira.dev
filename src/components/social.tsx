import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Social } from '@styles';

library.add(fab);

const SocialComponent = ({ items, ...props }) => {
  const socialLinks = {
    paypal: `https://paypal.me/${items.paypal}/5`,
    github: `https://github.com/${items.github}`,
    twitter: `https://twitter.com/${items.twitter}`,
    facebook: `https://fb.com/${items.facebook}`,
    codepen: `https://codepen.io/${items.codepen}`,
    npm: `https://www.npmjs.com/${items.npm}`,
    linkedin: `https://linkedin.com/in/${items.linkedin}`,
    instagram: `https://instagram.com/${items.instagram}`,
    dribbble: `https://dribbble.com/${items.dribbble}`,
    behance: `https://www.behance.net/${items.behance}`,
  };

  return (
    <Social.list {...props}>
      {Object.keys(socialLinks).map((link, i) => {
        return (
          <Social.item key={i}>
            <a href={socialLinks[link]} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', link]} />
            </a>
          </Social.item>
        );
      })}
    </Social.list>
  );
};

export default SocialComponent;
