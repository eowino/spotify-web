import React from 'react';
import styled, { css } from 'react-emotion';
import { css as cssUtil } from '../../misc';
import { spotifyCalm, spotifyGrey, spotifyGreen } from '../../styles';

interface IProgressBar {
  width?: number;
  getWidthFromState?: (val: number) => void;
}

interface IProgressBarState {
  width: number;
  isDown: boolean;
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

export class ProgressBar extends React.PureComponent<
  IProgressBar,
  IProgressBarState
> {
  state = {
    width: this.props.width || 0,
    isDown: false,
  };

  componentDidMount = () => {
    this.callGetWidthFromState();
  };

  setWidthFromEvent = (e: any) => {
    const { volumeUI } = this.getVolumeFromEvent(e);
    this.setState(
      () => ({
        width: this.filterWidthLimits(volumeUI),
      }),
      () => {
        this.callGetWidthFromState();
      }
    );
  };

  callGetWidthFromState() {
    const { getWidthFromState } = this.props;
    if (getWidthFromState && getWidthFromState instanceof Function) {
      getWidthFromState(this.state.width);
    }
  }

  handleMouseMove = (e: any) => {
    if (!this.state.isDown) return;
    this.setWidthFromEvent(e);
  };

  handleClick = (e: any) => {
    this.setWidthFromEvent(e);
  };

  handleMouseDown = (e: any) => {
    this.setState(() => ({
      isDown: true,
    }));
  };

  getVolumeFromEvent = (e: any) => {
    const mouseX =
      e.pageX - (e.currentTarget as HTMLElement).getBoundingClientRect().left;
    const elemWidth = e.currentTarget.offsetWidth;
    const volume = mouseX / elemWidth;
    const volumeUI = Math.ceil(volume * 100);

    return {
      mouseX,
      elemWidth,
      volumeUI,
    };
  };

  handleMouseLeave = (e: any) => {
    this.setState(() => ({
      isDown: false,
    }));
  };

  filterWidthLimits = (width: number) => {
    if (width >= 100) {
      return 100;
    } else if (width <= 0) {
      return 0;
    }
    return width;
  };

  getWidth = (isBall?: boolean) => {
    const { width } = this.state;
    return isBall ? `${width - 1}%` : `${width}%`;
  };

  render() {
    return (
      <StyledProgressBarWrapper>
        <StyledBackground
          className={sharedStyles}
          onMouseUp={this.handleMouseLeave}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
          onMouseDown={this.handleMouseDown}
          onClick={this.handleClick}>
          <StyledForeground
            className={cssUtil('slider-fg', sharedStyles)}
            style={{ width: this.getWidth() }}
          />
          <StyledSliderBall
            className="slider-ball"
            style={{ left: this.getWidth(true) }}
          />
        </StyledBackground>
      </StyledProgressBarWrapper>
    );
  }
}
