import React from 'react';
import styled, { css } from 'react-emotion';
import { css as cssUtil } from '../../misc/';
import { spotifyGreen, spotifyCalm, spotifyWhite } from '../../styles';

interface ILink extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  target?: string;
  subtleLink?: boolean;
  smallLink?: boolean;
  whiteLink?: boolean;
  withIcon?: boolean;
  active?: boolean;
  subtleWithUnderline?: boolean;
  children: React.ReactChild | React.ReactChild[];
}

const StyledLink = styled('a')({
  textTransform: 'uppercase',
  textDecoration: 'none',
});

const subtleLink = css({
  color: spotifyCalm,
  transitionDuration: '.2s',
  '&:hover, &:focus': {
    color: spotifyWhite,
    textDecoration: 'none',
    borderBottomColor: 'currentcolor',
  },
});

const smallLink = css({
  fontSize: '12px',
  color: spotifyCalm,
  borderBottom: '1px solid rgba(0,0,0,0)',
  paddingBottom: 3,
  textTransform: 'none',
  '&:hover, &:focus': {
    color: spotifyWhite,
    borderBottomColor: 'currentcolor',
  },
});

const whiteLink = css({
  color: spotifyWhite,
});

const active = css({
  color: spotifyGreen,
  '&:hover, &:focus': {
    color: spotifyGreen,
  },
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

const subtleWithUnderline = css({
  fontSize: 14,
  paddingBottom: 4,
  position: 'relative',
  letterSpacing: '.16em',
  margin: 10,
  padding: '5px 10px',
  '&.active': {
    color: spotifyWhite,
    '&::before': {
      content: '""',
      height: 2,
      backgroundColor: spotifyGreen,
      width: 30,
      position: 'absolute',
      display: 'block',
      left: '50%',
      bottom: 0,
      marginLeft: -15,
    },
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
      props.active ? active : '',
      props.subtleWithUnderline ? `${subtleLink} ${subtleWithUnderline}` : ''
    )}
  />
);
