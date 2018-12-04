import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { css as cssUtil } from '../../misc/';
import {
  spotifyCalm,
  spotifyWhite,
  spotifyBlack,
  spotifyGreen,
  spotifyLightGreen,
  focusPseudoClass,
} from '../../styles';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  rounded?: boolean;
  white?: boolean;
  black?: boolean;
  full?: boolean;
  control?: boolean;
}

const roundedBtn = css({
  border: 'none',
  color: spotifyWhite,
  backgroundColor: spotifyGreen,
  padding: '8px 22px',
  textTransform: 'uppercase',
  letterSpacing: '.16em',
  borderRadius: 500,
  fontSize: '.8em',
  [focusPseudoClass]: {
    backgroundColor: spotifyLightGreen,
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
  background: spotifyWhite,
  color: spotifyBlack,
  [focusPseudoClass]: {
    backgroundColor: spotifyWhite,
  },
});

const blackBtn = css({
  background: 'rgba(24,24,24,.7)',
  color: spotifyWhite,
  boxShadow: `inset 0 0 0 2px ${spotifyCalm}`,
  [focusPseudoClass]: {
    background: 'rgba(24,24,24,.7)',
    boxShadow: `inset 0 0 0 2px ${spotifyWhite}, 0 0 0 1px rgba(0,0,0,0)`,
  },
});

const StyledButton = styled('button')({
  color: spotifyBlack,
  fontSize: '1em',
  padding: '6px',
  textAlign: 'center',
});

const fullBtn = css({
  width: '100%',
});

const controlBtn = css({
  border: 'none',
  background: 'transparent',
  color: spotifyCalm,
  width: 32,
  height: 32,
  position: 'relative',
  [focusPseudoClass]: {
    color: spotifyWhite,
  },
});

export const Button = ({ className = '', ...props }: IButton) => (
  <StyledButton
    className={cssUtil(
      className,
      props.rounded ? roundedBtn : '',
      props.white ? whiteBtn : '',
      props.black ? blackBtn : '',
      props.full ? fullBtn : '',
      props.control ? controlBtn : ''
    )}
    {...props}
  />
);
