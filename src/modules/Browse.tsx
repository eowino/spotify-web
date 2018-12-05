import React from 'react';
import { Navbar, StyledWrapper, StyledFooter } from '../components/view/';
import { NowPlayingBar, Alert } from '../components/controls';

export function Browse() {
  return (
    <StyledWrapper className="has-alert">
      <Alert close fixedTop>
        Success
      </Alert>
      <Navbar />
      <StyledFooter>
        <NowPlayingBar />
      </StyledFooter>
    </StyledWrapper>
  );
}
