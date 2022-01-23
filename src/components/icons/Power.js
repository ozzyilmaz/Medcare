import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

function SvgPower(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      {...props}>
      <Path d="M15 3.849a1.02 1.02 0 00.629.926A9 9 0 0121 13.292 9 9 0 013 13a9 9 0 015.371-8.224A1.023 1.023 0 009 3.848a1 1 0 00-1.374-.929 11 11 0 108.751 0 1 1 0 00-1.377.93z" />
      <Rect x={11} width={2} height={8} rx={1} />
    </Svg>
  );
}

export default SvgPower;
