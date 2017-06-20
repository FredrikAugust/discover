import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';

const Nav = () => (
  <Header
    fixed={true}>
    <Title>Discover</Title>
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
      </Menu>
    </Box>
  </Header>
);

export default Nav;
