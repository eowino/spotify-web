import React from 'react';
import { ProgressBar } from './ProgressBar';
import styled from 'react-emotion';
import { spotifyCalm } from '../../styles';

interface IPlaybackBar {
  currentTime: string;
  totalTime: string;
  progressBarWidth: number;
}

const StyledPlaybackBar = styled('div')({
  display: 'flex',
  alignContent: 'center',
  position: 'relative',
  width: '100%',
});

const StyledTime = styled('span')({
  fontSize: 13,
  lineHeight: '16px',
  minWidth: 40,
  textAlign: 'center',
  color: spotifyCalm,
});

export class PlaybackBar extends React.PureComponent<IPlaybackBar> {
  static defaultProps: IPlaybackBar = {
    currentTime: '0:00',
    totalTime: '0:00',
    progressBarWidth: 0,
  };

  render() {
    return (
      <StyledPlaybackBar>
        <StyledTime>{this.props.currentTime}</StyledTime>
        <ProgressBar cssWidth={this.props.progressBarWidth} />
        <StyledTime>{this.props.totalTime}</StyledTime>
      </StyledPlaybackBar>
    );
  }
}
