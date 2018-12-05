import React from 'react';
import styled from 'react-emotion';

import { ProgressBar, Button } from '../controls/';

interface IVolumeControls {
  isMute?: boolean;
}

const StyledVolumeControls = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 12,
  justifyContent: 'space-between',
});

export class VolumeControls extends React.PureComponent<IVolumeControls> {
  render() {
    return (
      <StyledVolumeControls>
        <Button control aria-label={this.props.isMute ? 'Unmute' : 'Mute'}>
          <span
            className={
              this.props.isMute ? 'spoticon-volume-off' : 'spoticon-volume'
            }
          />
        </Button>
        <ProgressBar />
      </StyledVolumeControls>
    );
  }
}
