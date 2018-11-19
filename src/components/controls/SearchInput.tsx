import React from 'react';
import styled from 'react-emotion';
import { Input, IInput } from './Input';

interface ISearchInput extends IInput {}

const StyledSearchInput = styled(Input)({
  backgroundColor: '#282828',
  border: 'none',
  color: '#fff',
  display: 'block',
  fontWeight: 600,
  fontSize: '2.75em',
  lineHeight: '44px',
  width: '100%'
});

export const SearchInput = (props: ISearchInput) => (
  <StyledSearchInput placeholder="Start typing..." {...props} />
);
