import * as React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import { boxShadow, spotifyMidGrey, spotifyWhite } from '../../styles';
import { Playlist } from '../view';
import { Link } from '../controls';

export interface ICoverArt {
  href: string;
  coverArtUrl?: string;
  info?: string;
}

const StyledCoverArtWrapper = styled('div')({
  maxWidth: 280,
});

const StyledCoverArt = styled('a')({
  background: spotifyMidGrey,
  boxShadow: boxShadow,
  color: spotifyWhite,
  textDecoration: 'none',
  display: 'block',
  outline: 0,
  position: 'relative',
  height: 280,
  width: '100%',
});

const StyledCoverArtImage = styled('div')({
  backgroundSize: 'cover',
  opacity: 0,
  height: '100%',
  transitionDuration: '.3s',
  transitionProperty: 'opacity',
  transitionTimingFunction: 'cubic-bezier(.3,0,.4,1)',
});

const StyledMoreInfo = styled('div')({
  margin: '12px 0 4px',
  textAlign: 'center',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  a: {
    fontSize: 14,
    textTransform: 'none',
  },
});

const hasImage = css({
  opacity: 1,
});

export const CoverArt: React.SFC<ICoverArt> = ({ href, coverArtUrl, info }) => {
  const bgImage = coverArtUrl ? { backgroundImage: `url(${coverArtUrl})` } : {};
  return (
    <StyledCoverArtWrapper>
      <StyledCoverArt href={href}>
        {coverArtUrl ? null : <Playlist height="80" width="80" />}
        <StyledCoverArtImage
          style={bgImage}
          className={coverArtUrl ? hasImage : ''}
        />
      </StyledCoverArt>
      {info && (
        <StyledMoreInfo>
          <Link href={href} whiteLink>
            {info}
          </Link>
        </StyledMoreInfo>
      )}
    </StyledCoverArtWrapper>
  );
};
