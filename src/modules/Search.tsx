import React from 'react';
import { css } from 'emotion';
import { Navbar, StyledWrapper, StyledMainWrapper } from '../components/view/';
import { bgDarkBlueGradient } from '../styles/colours';

const bgImage = css({
  backgroundImage: bgDarkBlueGradient,
});

export function Search() {
  return (
    <StyledWrapper className={bgImage}>
      <Navbar />
      <StyledMainWrapper>Search area</StyledMainWrapper>
    </StyledWrapper>
  );
}
