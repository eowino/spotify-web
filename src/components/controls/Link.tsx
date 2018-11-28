import React from 'react';
import styled, { css } from 'react-emotion';
import { css as cssUtil } from '../../misc/';

interface ILink extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  subtleLink?: boolean;
  smallLink?: boolean;
  children: React.ReactChild;
}

const StyledLink = styled('a')({
  textTransform: 'uppercase',
  textDecoration: 'none',
});

const subtleLink = css({
  color: '#b3b3b3',
  transitionDuration: '.2s',
  '&:hover, &:focus': {
    color: '#fff',
    textDecoration: 'none',
    borderBottomColor: 'currentcolor',
  },
});

const smallLink = css({
  fontSize: '12px',
  color: '#b3b3b3',
  borderBottom: '1px solid rgba(0,0,0,0)',
  paddingBottom: 3,
  textTransform: 'none',
  '&:hover, &:focus': {
    color: '#fff',
    borderBottomColor: 'currentcolor',
  },
});

export const Link = ({ className = '', ...props }: ILink) => (
  <StyledLink
    {...props}
    className={cssUtil(
      className,
      props.subtleLink ? subtleLink : '',
      props.smallLink ? smallLink : ''
    )}
  />
);
