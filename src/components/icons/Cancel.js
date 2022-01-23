import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCancel(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      {...props}>
      <Path d="M18 6a1 1 0 00-1.414 0L12 10.586 7.414 6A1 1 0 006 6a1 1 0 000 1.414L10.586 12 6 16.586A1 1 0 006 18a1 1 0 001.414 0L12 13.414 16.586 18A1 1 0 0018 18a1 1 0 000-1.414L13.414 12 18 7.414A1 1 0 0018 6z" />
    </Svg>
  );
}

export default SvgCancel;
