import React from 'react';

import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';

const FrontPage = () => {
  return (
    <Box direction='row'>
      <Box basis='1/2'>
        <Image size='cover' src='https://loremflickr.com/1280/720' />
      </Box>
      <Box basis='1/2' pad={{horizontal: 'medium', vertical: 'small'}}>
        <Heading tag='h2'>Discover new projects all around the world</Heading>
        <p>Ipsum nesciunt saepe dolore quo eveniet. Tempore beatae doloribus officia eum dolores provident deleniti pariatur.</p>
        <Button path='/login' primary={true} label='Sign in'/>
        <Anchor label="Don't have an account? Sign up now" />
      </Box>
    </Box>
  );
};

export default FrontPage;
