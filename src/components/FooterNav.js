import React from 'react';

import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';

const FooterNav = () => (
  <Footer justify='between'>
    <Title>Discover</Title>
    <Box direction='row'
      align='center'
      pad={{between: 'medium', vertical: 'medium'}}
      responsive={false}>
      <Paragraph margin='none'>&copy; Discover 2017</Paragraph>
      <Menu direction='row'
        size='small'
        dropAlign={{'right': 'right'}}>
        <Anchor path='/support'>
          Support
        </Anchor>
        <Anchor path='/contact'>
          Contact
        </Anchor>
        <Anchor path='/about'>
          About
        </Anchor>
      </Menu>
    </Box>
  </Footer>
);

export default FooterNav;
