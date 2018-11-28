import React from 'react';
import styled from 'react-emotion';
import { LogoWithText, Search, Home, Library } from '../view';
import { Link, Button } from '../controls';
import { mgb20 } from '../../styles';

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
  margin: '10px 0 20px',
});

const PrimaryNavArea = styled('div')({
  flex: 1,
});

const SecondaryNavArea = styled('div')({
  marginBottom: 30,
});

const Divider = styled('span')({
  display: 'inline-block',
  width: 1,
  height: 13,
  borderLeft: '1px solid #b3b3b3',
  margin: '3px 15px',
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
        <SecondaryNavArea>
          <Button white rounded full className={mgb20}>
            Sign Up
          </Button>
          <Button black rounded full className={mgb20}>
            Log In
          </Button>
          <div>
            <Link href="#library" smallLink>
              Cookies
            </Link>
            <Divider />
            <Link href="#library" smallLink>
              Cookies
            </Link>
          </div>
        </SecondaryNavArea>
      </StyledNavBar>
    );
  }
}
