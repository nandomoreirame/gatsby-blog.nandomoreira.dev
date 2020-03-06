import React from 'react';
import SEO from '@components/seo';
import Layout from '@components/layout';
import Newsletter from '@components/newsletter';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contato" description="Contato" />
      <Newsletter />
    </Layout>
  );
};

export default ContactPage;
