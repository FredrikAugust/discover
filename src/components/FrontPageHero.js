import React from 'react';

import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';

import { Link } from 'react-router-dom';
import LinkAnchor from './LinkAnchor';

const FrontPageHero = () => (
  <Box direction='row'>
    <Box basis='1/2'>
      <Image full={true} src='http://via.placeholder.com/1280x720' />
    </Box>
    <Box basis='1/2' pad={{horizontal: 'medium', vertical: 'small'}}>
      <Heading tag='h2'>Discover new projects all around the world</Heading>
      <Paragraph size='large'>Ipsum nesciunt saepe dolore quo eveniet. Tempore beatae doloribus officia eum dolores provident deleniti pariatur.</Paragraph>
      <Link to='/login'>
        <Button onClick={()=>{}} primary={true} label='Sign in'/>
      </Link>
      <LinkAnchor to='/signup'>Don't have an account? Sign up</LinkAnchor>
    </Box>
  </Box>
);

export default FrontPageHero;
