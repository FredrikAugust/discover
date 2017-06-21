import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';

import MenuIcon from 'grommet/components/icons/base/Menu';
import UserIcon from 'grommet/components/icons/base/User';
import LoginIcon from 'grommet/components/icons/base/Login';
import LogoutIcon from 'grommet/components/icons/base/Logout';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import LinkAnchor from './LinkAnchor';

import { signOut } from '../actions/authenticationActions';

const Nav = ({ loggedIn, signOut }) => (
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
      <Link to={loggedIn ? '/profile' : '/login' }>
        <Menu icon={loggedIn ? <UserIcon /> : <LoginIcon />}>
        </Menu>
      </Link>
      {
        loggedIn ?
          <Menu onClick={signOut} icon={<LogoutIcon />}>
          </Menu> :
          ''
      }
    </Box>
  </Header>
);

export default connect(
  state => ({
    loggedIn: !!state.currentUser.token
  }),
  dispatch => ({
    signOut: () => { dispatch(signOut()); }
  })
)(Nav);
