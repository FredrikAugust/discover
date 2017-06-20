import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import UserIcon from 'grommet/components/icons/base/User';

import { Link } from 'react-router-dom';

import LinkAnchor from './LinkAnchor';

const Nav = () => (
  <Header
    fixed={true}>
    <Title><Link to='/'>Discover</Link></Title>
    <Box flex={true}
      justify='end'
      direction='row'
      responsive={false}>
      <Search inline={true}
        fill={true}
        size='medium'
        placeHolder='Search for projects'
        dropAlign={{'right': 'right'}} />
      <Menu icon={<MenuIcon />}
        dropAlign={{'right': 'right'}}>
        <LinkAnchor to='/discover'>Discover</LinkAnchor>
        <LinkAnchor to='/support'>Support</LinkAnchor>
        <LinkAnchor to='/contact'>Contact</LinkAnchor>
        <LinkAnchor to='/about'>About</LinkAnchor>
      </Menu>
      <LinkAnchor to='/profile'>
        <UserIcon />
      </LinkAnchor>
    </Box>
  </Header>
);

export default Nav;
