import React from 'react';
import { css } from 'emotion';
import { NavBar, StyledWrapper, StyledMainWrapper } from '../components/view/';
import { bgDarkBlueGradient } from '../styles/colours';

const bgImage = css({
  backgroundImage: bgDarkBlueGradient,
});

export function Search() {
  return (
    <StyledWrapper className={bgImage}>
      <NavBar />
      <StyledMainWrapper>Search area</StyledMainWrapper>
    </StyledWrapper>
  );
}
