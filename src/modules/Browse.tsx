import React from 'react';
import { Navbar, StyledWrapper, StyledFooter } from '../components/view/';
import { NowPlayingBar, Alert } from '../components/controls';

export function Browse() {
  return (
    <StyledWrapper>
      <Navbar />
      <StyledFooter>
        <NowPlayingBar />
      </StyledFooter>
    </StyledWrapper>
  );
}
