import React from 'react';
import styled from 'react-emotion';
import { ProgressBar, PlaybackBar, PlayerControls } from './';
import {
  spotifyMidGrey,
  spotifyWhite,
  spotifyCalm,
  focusPseudoClass,
} from '../../styles';

const StyledNowPlayingBar = styled('div')({
  color: spotifyCalm,
  backgroundColor: spotifyMidGrey,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: 90,
  padding: '0 16px',
  minWidth: 620,
  button: {
    [focusPseudoClass]: {
      color: spotifyWhite,
    },
  },
});

const StyledLeftArea = styled('div')({
  width: '30%',
  minWidth: 180,
});
const StyledCenterArea = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40%',
  maxWidth: 722,
});
const StyledRightArea = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  width: '30%',
  minWidth: 180,
});

const StyledInnerRightArea = styled('div')({
  width: 180,
});

export class NowPlayingBar extends React.PureComponent {
  render() {
    return (
      <StyledNowPlayingBar>
        <StyledLeftArea>Left</StyledLeftArea>
        <StyledCenterArea>
          <PlayerControls />
          <PlaybackBar />
        </StyledCenterArea>
        <StyledRightArea>
          <StyledInnerRightArea>
            <ProgressBar cssWidth={50} />
          </StyledInnerRightArea>
        </StyledRightArea>
      </StyledNowPlayingBar>
    );
  }
}
