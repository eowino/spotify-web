import React from 'react';
import styled from 'react-emotion';
import { Button } from './Button';

interface IPlayerControls {
  renderDemoMarkup?: Function;
}

const StyledPlayerControls = styled('div')({
  display: 'flex',
  marginBottom: 12,
  justifyContent: 'space-between',
  width: 224,
});

export class PlayerControls extends React.PureComponent<IPlayerControls> {
  render() {
    const { renderDemoMarkup } = this.props;

    return renderDemoMarkup ? (
      <StyledPlayerControls>{renderDemoMarkup()}</StyledPlayerControls>
    ) : (
      <StyledPlayerControls>
        <Button control>
          <span className="spoticon-shuffle" />
        </Button>
        <Button control>
          <span className="spoticon-skip-back" />
        </Button>
        <Button control circled>
          <span className="spoticon-play" />
        </Button>
        <Button control>
          <span className="spoticon-skip-next" />
        </Button>
        <Button control>
          <span className="spoticon-repeat" />
        </Button>
      </StyledPlayerControls>
    );
  }
}
