import React from 'react';
import styled from 'react-emotion';

interface ILink extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  btnLink?: boolean;
  children: React.ReactChild;
}

const StyledLink = styled('a')({
  textTransform: 'uppercase',
});

export default (props: ILink) => <StyledLink {...props} />;
