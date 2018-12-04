import React from 'react';
import styled from 'react-emotion';
import { Input, IInput } from './Input';
import { spotifyGreen, spotifyWhite } from '../../styles';

interface ISearchInput extends IInput {}

const StyledSearchInput = styled(Input)({
  backgroundColor: '#282828',
  border: 'none',
  color: spotifyWhite,
  display: 'block',
  fontWeight: 600,
  fontSize: '2.25em',
  lineHeight: '44px',
  width: '100%',
  caretColor: spotifyGreen,
});

export const SearchInput = (props: ISearchInput) => (
  <StyledSearchInput placeholder="Start typing..." {...props} />
);
