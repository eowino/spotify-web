import React from 'react';
import styled, { css } from 'react-emotion';
import { css as cssUtil } from '../../misc/';

interface ILink extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  subtleLink?: boolean;
  smallLink?: boolean;
  whiteLink?: boolean;
  withIcon?: boolean;
  active?: boolean;
  children: React.ReactChild | React.ReactChild[];
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

const whiteLink = css({
  color: '#fff',
});

const active = css({
  color: '#1db954',
});

const withIcon = css({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  textTransform: 'none',
  '> svg': {
    marginRight: 10,
  },
});

export const Link = ({ className = '', ...props }: ILink) => (
  <StyledLink
    {...props}
    className={cssUtil(
      className,
      props.subtleLink ? subtleLink : '',
      props.smallLink ? smallLink : '',
      props.whiteLink ? whiteLink : '',
      props.withIcon ? withIcon : '',
      props.active ? active : ''
    )}
  />
);
