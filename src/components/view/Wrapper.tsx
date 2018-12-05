import styled from 'react-emotion';
import { bgBlueGradient } from '../../styles/colours';

export const StyledWrapper = styled('div')({
  backgroundImage: bgBlueGradient,
  height: '100vh',
  '&.has-alert': {
    paddingTop: 50,
  },
});

export const StyledMainWrapper = styled('div')({
  height: '100%',
});
