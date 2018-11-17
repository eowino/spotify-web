import React from 'react';
import styled from 'react-emotion';

interface IButton {}

const StyledButton = styled('button')({
  color: '#2a2a2a',
  fontSize: '1em',
  padding: '6px'
});

export const Button = (props: IButton) => <StyledButton {...props} />;
