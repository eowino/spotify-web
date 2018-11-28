import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { css as cssUtil } from '../../misc/';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  rounded?: boolean;
  white?: boolean;
  black?: boolean;
}

const roundedBtn = css({
  border: 'none',
  color: '#fff',
  backgroundColor: '#1db954',
  padding: '7px 22px',
  textTransform: 'uppercase',
  letterSpacing: '.16em',
  borderRadius: 500,
  fontSize: '.8em',
  '&:hover:not(:disabled), &:focus:not(:disabled)': {
    backgroundColor: '#1ed760',
    cursor: 'pointer',
    transform: 'scale(1.06)',
    transition: 'all 33ms cubic-bezier(.3,0,0,1)',
    outline: 'none',
  },
  '&:disabled': {
    opacity: 0.7,
  },
});

const whiteBtn = css({
  background: '#fff',
  color: '#000',
  '&:hover:not(:disabled), &:focus:not(:disabled)': {
    backgroundColor: '#fff',
  },
});

const blackBtn = css({
  background: 'rgba(24,24,24,.7)',
  color: '#fff',
  boxShadow: 'inset 0 0 0 2px #b3b3b3',
  '&:hover:not(:disabled), &:focus:not(:disabled)': {
    background: 'rgba(24,24,24,.7)',
    boxShadow: 'inset 0 0 0 2px #fff, 0 0 0 1px rgba(0,0,0,0)',
  },
});

const StyledButton = styled('button')({
  color: '#2a2a2a',
  fontSize: '1em',
  padding: '6px',
  textAlign: 'center',
});

export const Button = ({ className = '', ...props }: IButton) => (
  <StyledButton
    className={cssUtil(
      className,
      props.rounded ? roundedBtn : '',
      props.white ? whiteBtn : '',
      props.black ? blackBtn : ''
    )}
    {...props}
  />
);
