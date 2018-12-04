import React from 'react';
import styled from 'react-emotion';

const StyledVolumeControls = styled('div')({
  display: 'flex',
  marginBottom: 12,
  justifyContent: 'space-between',
  width: 224,
});

export class VolumeControls extends React.PureComponent {
  render() {
    return <StyledVolumeControls>Volume Controls</StyledVolumeControls>;
  }
}
