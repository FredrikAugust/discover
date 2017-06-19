import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Actions from 'grommet/components/icons/base/Actions';

const Nav = () => {
  return (
    <Header
      large={true}
      pad={{horizontal: 'medium'}}>
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
        <Menu icon={<Actions />}
          dropAlign={{'right': 'right'}}>
        </Menu>
      </Box>
    </Header>
  );
};

export default Nav;
