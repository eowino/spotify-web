import React from 'react';
import styled from 'react-emotion';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  name: string;
}

const StyledInput = styled('input')({
  color: '#2a2a2a',
  fontSize: '1em',
  padding: '6px 12px'
});

export const Input = (props: IInput) => <StyledInput type="text" {...props} />;
