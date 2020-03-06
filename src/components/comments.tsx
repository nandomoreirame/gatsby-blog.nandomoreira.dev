import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { Single } from '@styles';

const CommentsComponent = ({ shortname, config }) => (
  <Single.comments>
    <Single.commentsInner>
      <DiscussionEmbed shortname={shortname} config={config} />
    </Single.commentsInner>
  </Single.comments>
);

export default CommentsComponent;
