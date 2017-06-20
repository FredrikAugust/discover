import React from 'react';

import FrontPageHero from './FrontPageHero';
import ProjectHighlight from './ProjectHighlight';

import Article from 'grommet/components/Article';

const FrontPage = () => (
  <Article>
    <FrontPageHero />
    <ProjectHighlight />
  </Article>
);

export default FrontPage;
