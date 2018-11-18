import React from 'react';
import styled from 'react-emotion';

const StyledNavBar = styled('nav')({
  backgroundColor: 'rgba(0,0,0,.8)',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: '24px 24px 5px',
  width: '230px',
  '@media screen and (max-width: 720px)': {
    width: '80px'
  }
});

export class NavBar extends React.PureComponent {
  render() {
    return <StyledNavBar>Nav Bar children</StyledNavBar>;
  }
}
