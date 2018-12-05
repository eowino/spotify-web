import React from 'react';
import { ProgressBar } from './ProgressBar';
import styled, { css } from 'react-emotion';
import { spotifyCalm } from '../../styles';

interface IPlaybackBar {
  currentTime: string;
  totalTime: string;
}

const StyledPlaybackBar = styled('div')({
  display: 'flex',
  alignContent: 'center',
  position: 'relative',
});

const StyledTime = styled('span')({
  fontSize: 13,
  lineHeight: '16px',
  minWidth: 40,
  textAlign: 'center',
  color: spotifyCalm,
});

const progressBar = css({
  top: 6,
});

export class PlaybackBar extends React.PureComponent<IPlaybackBar> {
  static defaultProps: IPlaybackBar = {
    currentTime: '0:00',
    totalTime: '0:00',
  };

  render() {
    return (
      <StyledPlaybackBar>
        <StyledTime>{this.props.currentTime}</StyledTime>
        <ProgressBar />
        <StyledTime>{this.props.totalTime}</StyledTime>
      </StyledPlaybackBar>
    );
  }
}
