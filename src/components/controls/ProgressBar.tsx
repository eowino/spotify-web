import React from 'react';
import styled from 'react-emotion';

const StyledProgressBar = styled('div')({
  height: 12,
  position: 'relative',
  width: '100%',
});
export class ProgressBar extends React.PureComponent {
  render() {
    return <StyledProgressBar />;
  }
}
