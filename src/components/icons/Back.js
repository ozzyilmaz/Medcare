import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBack(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 11.355 24.004"
      {...props}>
      <Path
        d="M10.349 24.004a1 1 0 01-.71-.29l-8.17-8.17a5 5 0 010-7.08l8.17-8.17a1.004 1.004 0 111.42 1.42l-8.17 8.17a3 3 0 000 4.24l8.17 8.17a1 1 0 01-.71 1.71z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgBack;
