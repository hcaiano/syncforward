import { SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { compose, space, color } from 'styled-system';
import { IconProps } from './types';
import { size } from './sizeVariant';
const SvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, svgRef) => {
  return <svg viewBox="0 0 300 73" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props}><g clipPath="url(#apple-music_svg__clip0_447_69)" fill="currentColor"><path d="M47.28 38.34c-.094-5.88 2.41-10.46 7.51-13.74-2.867-4.24-7.107-6.627-12.72-7.16-2.625-.092-5.238.4-7.65 1.44a37.005 37.005 0 01-5.63 1.88 16.4 16.4 0 01-5.08-1.59 17 17 0 00-6.4-1.59A15.62 15.62 0 009 20.08a17.74 17.74 0 00-6.12 6.61A25.08 25.08 0 000 39.14a41.4 41.4 0 002.15 13A44.39 44.39 0 007.3 63.09a35.712 35.712 0 004.86 6.22c2 2 4 3 6.13 2.89a15.242 15.242 0 005.28-1.52 14.88 14.88 0 016.11-1.37c2.048.033 4.065.5 5.92 1.37 1.742.837 3.63 1.33 5.56 1.45a9.15 9.15 0 006-2.82 16.73 16.73 0 002.11-2.39c.77-1 1.61-2.22 2.54-3.61.65-1 1.29-2.1 1.92-3.26a33.868 33.868 0 001.7-3.69c.23-.53.44-1.07.62-1.62s.38-1.12.56-1.7a15.54 15.54 0 01-4.66-3.26 15.911 15.911 0 01-4.67-11.44zM97.698 51.24h-.34l-14.12-32.75h-11.09v52.84h9.66V37.11h.45l11.8 27.17h6.78l11.77-27.17h.44v34.22h9.78V18.49h-11.01l-14.12 32.75zM38.52 11.57A16.06 16.06 0 0042.2 1.45V.72a3.517 3.517 0 00-.07-.72 13.51 13.51 0 00-5.46 1.66 15.218 15.218 0 00-4.76 3.83 15.14 15.14 0 00-3.75 9.77V16c0 .232.023.463.07.69 3.84.31 7.28-1.35 10.29-5.12zM246.63 18.49h-10.86v52.84h10.86V18.49zM279.441 26.89c6.44 0 9.85 5 9.85 10.45h10.41v-1.12c0-10.22-7.68-18.73-20.34-18.73-13.56 0-21.65 9.06-21.65 24.5v6c0 15.45 8 24.39 21.62 24.39 13 0 20.37-8.63 20.37-18.24v-1.2h-10.41c0 5.46-3.34 10-9.78 10-6.44 0-10.78-4.76-10.78-15V42c0-10.12 4.27-15.11 10.71-15.11zM164.371 51.86c0 7.09-4.08 11-10.08 11s-10.11-3.87-10.11-11V18.49h-10.79v34.92c0 11.27 7.87 18.93 20.9 18.93 13.03 0 20.9-7.66 20.9-18.93V18.49h-10.82v33.37zM211.131 40.56l-7.75-1.78c-4.57-1-7-3-7-6.09 0-4.06 3.26-6.62 8.51-6.62 5.91 0 8.87 3.45 9.14 7.17h10.11c-.08-9.34-7.76-15.84-19.14-15.84-10.82 0-19.36 5.77-19.36 16.15 0 9 6 13.16 13.18 14.75l7.68 1.81c5.17 1.2 7.79 2.94 7.79 6.54 0 4.11-3.22 6.9-9.25 6.9-6.48 0-9.89-3.49-10.19-7.4h-10.46c.15 7.48 5 16.18 20.08 16.18 12.66 0 20.53-6.33 20.53-16.76 0-9.57-6.38-13.35-13.87-15.01z" /></g><defs><clipPath id="apple-music_svg__clip0_447_69"><path fill="#fff" d="M0 0h299.7v72.34H0z" /></clipPath></defs></svg>;
});
const AppleMusic = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, size));
AppleMusic.defaultProps = {
  size: 'md'
};
AppleMusic.displayName = "PsAppleMusic";
export default AppleMusic;