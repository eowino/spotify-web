import React from 'react';
import styled from 'react-emotion';
import { Button } from '../controls';
import { spotifyRed, spotifyWhite, spotifyGreen } from '../../styles';
import { css as cssUtil } from '../../misc';

interface IAlert {
  danger?: boolean;
  close?: boolean;
  fixedTop?: boolean;
  content?: string;
}

const StyledAlert = styled('div')({
  backgroundColor: spotifyGreen,
  color: spotifyWhite,
  padding: '0 20px',
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&.alert-danger': {
    backgroundColor: spotifyRed,
  },
  '&.alert-fixed-top': {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 102,
  },
  button: {
    color: spotifyWhite,
  },
});

export class Alert extends React.PureComponent<IAlert> {
  render() {
    return (
      <StyledAlert
        aria-live="polite"
        className={cssUtil(
          this.props.danger ? 'alert-danger' : '',
          this.props.fixedTop ? 'alert-fixed-top' : ''
        )}>
        {this.props.children}
        {this.props.close && (
          <Button noDefault aria-label="Close">
            <span className="spoticon-close" />
          </Button>
        )}
      </StyledAlert>
    );
  }
}
