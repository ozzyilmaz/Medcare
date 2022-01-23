import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAccept(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      {...props}>
      <Path d="M22.319 4.431L8.5 18.249a1 1 0 01-1.417 0L1.739 12.9a1 1 0 00-1.417 0 1 1 0 000 1.417l5.346 5.345a3.008 3.008 0 004.25 0L23.736 5.847a1 1 0 000-1.416 1 1 0 00-1.417 0z" />
    </Svg>
  );
}

export default SvgAccept;
