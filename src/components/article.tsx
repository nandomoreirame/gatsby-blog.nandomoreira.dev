import React from 'react';
import { Link } from 'gatsby';
import { Article } from '@styles';

const ArticleComponent = ({ node }) => {
  const { path, title, description, date, excerpt } = node.frontmatter;
  const { readingTime } = node.fields;

  const minutes = node.timeToRead.toFixed();
  const words = readingTime.words;

  return (
    <Article.item role="article">
      <Link to={path}>
        <Article.header>
          <Article.title aria-label="Título">{title}</Article.title>
          <Article.meta>
            <span>
              Publicado <strong>{date}</strong> por <strong>Fernando Moreira</strong>
            </span>
            <span className="divider" />
            <span>
              Tempo de leitura:{' '}
              <strong role="timer">
                {minutes} minuto
                {`${minutes > 1 ? 's' : ''}`}
              </strong>{' '}
              - {words} palavras
            </span>
          </Article.meta>
        </Article.header>
        <Article.excerpt aria-label="Descrição">{description || excerpt}</Article.excerpt>
      </Link>
    </Article.item>
  );
};

export default ArticleComponent;
