import React from 'react';
import styled, { css } from 'react-emotion';
import { spotifyCalm, spotifyGrey, spotifyGreen } from '../../styles';

interface IProgressBar {
  cssWidth?: string;
}

const StyledProgressBarWrapper = styled('div')({
  height: 12,
  position: 'relative',
  width: '100%',
});

const sharedStyles = css({
  height: 4,
  borderRadius: 4,
  width: '100%',
});

const StyledBackground = styled('div')({
  backgroundColor: spotifyGrey,
});

const StyledForeground = styled('div')({
  backgroundColor: spotifyCalm,
  transitionDuration: '.1s',
  transitionTimingFunction: 'cubic-bezier(1,0,.7,1)',
  transitionProperty: 'background-color',
  '&:hover': {
    backgroundColor: spotifyGreen,
  },
});

export class ProgressBar extends React.PureComponent<IProgressBar> {
  render() {
    const { cssWidth } = this.props;
    return (
      <StyledProgressBarWrapper>
        <StyledBackground className={sharedStyles}>
          <StyledForeground
            className={sharedStyles}
            style={{ width: cssWidth || '100%' }}
          />
        </StyledBackground>
      </StyledProgressBarWrapper>
    );
  }
}
