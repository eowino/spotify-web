import React from 'react';
import styled from 'react-emotion';
import { LogoWithText, Search, Home, Library } from '../view';
import { Link } from '../controls';

const StyledNavBar = styled('nav')({
  backgroundColor: '#0b0907',
  color: '#fff',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100vh',
  padding: '24px 24px 5px',
  width: '230px',
  '@media screen and (max-width: 720px)': {
    width: '80px',
  },
});

const StyledNavBarLink = styled('div')({
  margin: '10px 0 5px',
});

const PrimaryNavArea = styled('div')({
  flex: 1,
});

export class NavBar extends React.PureComponent {
  render() {
    return (
      <StyledNavBar>
        <PrimaryNavArea>
          <StyledNavBarLink>
            <Link href="#home" whiteLink>
              <LogoWithText />
            </Link>
          </StyledNavBarLink>
          <StyledNavBarLink>
            <Link href="#search" subtleLink withIcon>
              <Search />
              <span>Search</span>
            </Link>
          </StyledNavBarLink>
          <StyledNavBarLink>
            <Link href="#home" subtleLink withIcon>
              <Home />
              <span>Home</span>
            </Link>
          </StyledNavBarLink>
          <StyledNavBarLink>
            <Link href="#library" subtleLink withIcon>
              <Library />
              <span>Your Library</span>
            </Link>
          </StyledNavBarLink>
        </PrimaryNavArea>
      </StyledNavBar>
    );
  }
}
