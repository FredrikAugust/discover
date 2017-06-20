import React from 'react';

import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';

import LinkAnchor from './LinkAnchor';

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
        <LinkAnchor to='/support'>Support</LinkAnchor>
        <LinkAnchor to='/contact'>Contact</LinkAnchor>
        <LinkAnchor to='/about'>About</LinkAnchor>
      </Menu>
    </Box>
  </Footer>
);

export default FooterNav;
