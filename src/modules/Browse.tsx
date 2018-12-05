import React from 'react';
import { Navbar, StyledWrapper, StyledFooter } from '../components/view/';
import { NowPlayingBar, Alert } from '../components/controls';

export function Browse() {
  return (
    <StyledWrapper>
      <Alert close fixedTop>
        Welcome to Spotify Web
      </Alert>
      <Navbar />
      <StyledFooter>
        <NowPlayingBar />
      </StyledFooter>
    </StyledWrapper>
  );
}
