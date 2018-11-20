import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { css as cssUtil } from '../../misc/';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  rounded?: boolean;
}

const roundedBtn = css({
  color: '#fff',
  backgroundColor: '#1db954',
  padding: '7px 22px',
  textTransform: 'uppercase',
  letterSpacing: '.16em',
  borderRadius: 500,
  fontSize: '.8em',
  '&:hover:not(:disabled), &:focus:not(:disabled)': {
    backgroundColor: '#1ed760',
    transform: 'scale(1.06)',
    transition: 'all 33ms cubic-bezier(.3,0,0,1)',
    outline: 'none'
  },
  '&:disabled': {
    opacity: 0.7
  }
});

const StyledButton = styled('button')({
  color: '#2a2a2a',
  fontSize: '1em',
  padding: '6px',
  textAlign: 'center'
});

export const Button = ({ className = '', ...props }: IButton) => (
  <StyledButton
    className={cssUtil(className, props.rounded ? roundedBtn : '')}
    {...props}
  />
);
