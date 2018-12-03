import { css } from 'emotion';

const bpDesktop = 720;
export const activeInDesktop = `@media (min-width: ${bpDesktop}px)`;
export const activeInTablet = `@media (max-width: ${bpDesktop}px)`;

export const hideInTablet = css({
  [activeInTablet]: {
    display: 'none',
  },
});

export const hideInDesktop = css({
  [activeInDesktop]: {
    display: 'none',
  },
});
