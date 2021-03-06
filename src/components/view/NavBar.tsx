import React from 'react';
import styled from 'react-emotion';
import { LogoWithText, Logo, Search, Home, Library } from '.';
import { Link, Button } from '../controls';
import { mgb20, center } from '../../styles';
import {
  hideInTablet,
  hideInDesktop,
  activeInTablet,
  spotifyWhite,
  spotifyCalm,
} from '../../styles';

const StyledNavbar = styled('nav')({
  backgroundColor: '#0b0907',
  color: spotifyWhite,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100vh',
  padding: '24px 24px 5px',
  width: '230px',
  fontSize: 16,
  [activeInTablet]: {
    width: '80px',
    padding: '24px 0 0',
    flexDirection: 'unset',
  },
});

const StyledNavbarLink = styled('div')({
  margin: '10px 0 20px',
  [activeInTablet]: {
    a: {
      paddingLeft: 8,
      display: 'block',
      textAlign: 'center',
    },
    'a.logo': {
      paddingLeft: 0,
    },
  },
});

const PrimaryNavArea = styled('div')({
  flex: 1,
});

const SecondaryNavArea = styled('div')({
  margin: '0px 0 110px',
  fontSize: 14,
});

const Divider = styled('span')({
  display: 'inline-block',
  width: 1,
  height: 13,
  borderLeft: `1px solid ${spotifyCalm}`,
  margin: '3px 15px',
  verticalAlign: 'middle',
});

export class Navbar extends React.PureComponent {
  render() {
    return (
      <StyledNavbar>
        <PrimaryNavArea>
          <StyledNavbarLink>
            <Link href="#home" className="logo" whiteLink>
              <span className={hideInTablet}>
                <LogoWithText />
              </span>
              <span className={hideInDesktop}>
                <Logo />
              </span>
            </Link>
          </StyledNavbarLink>
          <StyledNavbarLink>
            <Link href="#search" subtleLink withIcon>
              <Search />
              <span className={hideInTablet}>Search</span>
            </Link>
          </StyledNavbarLink>
          <StyledNavbarLink>
            <Link href="#home" subtleLink withIcon active>
              <Home />
              <span className={hideInTablet}>Home</span>
            </Link>
          </StyledNavbarLink>
          <StyledNavbarLink>
            <Link href="#library" subtleLink withIcon>
              <Library />
              <span className={hideInTablet}>Your Library</span>
            </Link>
          </StyledNavbarLink>
        </PrimaryNavArea>
        <SecondaryNavArea className={hideInTablet}>
          <Button white rounded full className={mgb20}>
            Sign Up
          </Button>
          <Button black rounded full className={mgb20}>
            Log In
          </Button>
          <div className={center}>
            <Link
              href="https://www.spotify.com/uk/legal/cookies-policy/"
              target="_blank"
              smallLink>
              Cookies
            </Link>
            <Divider />
            <Link
              href="https://www.spotify.com/uk/legal/privacy-policy/"
              target="_blank"
              smallLink>
              Privacy
            </Link>
          </div>
        </SecondaryNavArea>
      </StyledNavbar>
    );
  }
}
