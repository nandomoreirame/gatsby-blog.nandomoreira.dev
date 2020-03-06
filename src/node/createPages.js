const { resolve } = require('path');
const srcPath = resolve(__dirname, '..', '..', 'src');
const templatesPath = resolve(srcPath, 'templates');

const createPostsList = (createPage, posts) => {
  const perPage = 12;
  const numPages = Math.ceil(posts.length / perPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}`,
      component: resolve(`${templatesPath}/blog.template.tsx`),
      context: {
        limit: perPage,
        skip: i * perPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

const createSinglePost = (createPage, posts) => {
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: resolve(`${templatesPath}/single.template.tsx`),
      slug: node.fields.slug,
      context: {},
    });
  });
};

module.exports = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          listPostsQuery: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                frontmatter {
                  path
                }
                fields {
                  slug
                }
              }
            }
          }
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) reject(result.errors);

        createPostsList(createPage, result.data.listPostsQuery.edges);
        createSinglePost(createPage, result.data.allMarkdownRemark.edges);
      })
    );
  });
};
