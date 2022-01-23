import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUser(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 18 24"
      fill="black"
      {...props}>
      <Path
        data-name="Path 31"
        d="M9 12a6 6 0 10-6-6 6 6 0 006 6zM9 2a4 4 0 11-4 4 4 4 0 014-4z"
        stroke="none"
      />
      <Path
        data-name="Path 32"
        d="M9 14a9.01 9.01 0 00-9 9 1 1 0 102 0 7 7 0 1114 0 1 1 0 002 0 9.01 9.01 0 00-9-9z"
        stroke="none"
      />
    </Svg>
  );
}

export default SvgUser;
