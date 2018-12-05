import React from 'react';
import styled, { css } from 'react-emotion';
import { css as cssUtil } from '../../misc';
import { spotifyCalm, spotifyGrey, spotifyGreen } from '../../styles';

interface IProgressBar {
  cssWidth?: number;
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
  position: 'absolute',
  top: '50%',
  '&:hover': {
    '.slider-fg': {
      backgroundColor: spotifyGreen,
      cursor: 'pointer',
    },
    '.slider-ball': {
      display: 'block',
    },
  },
});

const StyledSliderBall = styled('span')({
  backgroundColor: spotifyCalm,
  borderRadius: '100%',
  display: 'none',
  height: 14,
  width: 14,
  position: 'absolute',
  top: -5,
  '&:hover': {
    cursor: 'pointer',
  },
});

const StyledForeground = styled('div')({
  backgroundColor: spotifyCalm,
  transitionDuration: '.1s',
  transitionTimingFunction: 'cubic-bezier(1,0,.7,1)',
  transitionProperty: 'background-color',
});

export class ProgressBar extends React.PureComponent<IProgressBar> {
  handleMouseMove = (e: any) => {
    console.log(e.pageX, e.pageY);
  };

  width = (isBall?: boolean) => {
    const cssWidth = this.props.cssWidth || 0;
    return isBall ? `${cssWidth - 1}%` : `${cssWidth}%`;
  };

  render() {
    return (
      <StyledProgressBarWrapper onMouseMove={this.handleMouseMove}>
        <StyledBackground className={sharedStyles}>
          <StyledForeground
            className={cssUtil('slider-fg', sharedStyles)}
            style={{ width: this.width() }}
          />
          <StyledSliderBall
            className="slider-ball"
            style={{ left: this.width(true) }}
          />
        </StyledBackground>
      </StyledProgressBarWrapper>
    );
  }
}
