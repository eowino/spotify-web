import React from 'react';
import styled from 'react-emotion';
import { ProgressBar } from './ProgressBar';
import {
  spotifyBlack,
  spotifyWhite,
  spotifyCalm,
  focusPseudoClass,
} from '../../styles';

const StyledNowPlayingBar = styled('div')({
  color: spotifyCalm,
  backgroundColor: spotifyBlack,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: 90,
  padding: '0 16px',
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

export class NowPlayingBar extends React.PureComponent {
  render() {
    return (
      <StyledNowPlayingBar>
        <StyledLeftArea>Left</StyledLeftArea>
        <StyledCenterArea>Center</StyledCenterArea>
        <StyledRightArea>
          <ProgressBar cssWidth={50} />
        </StyledRightArea>
      </StyledNowPlayingBar>
    );
  }
}
