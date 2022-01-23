import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCamera(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      {...props}>
      <Path d="M19 4h-.508l-2.184-2.832A3.023 3.023 0 0013.932 0h-3.864a3.023 3.023 0 00-2.376 1.168L5.508 4H5a5.006 5.006 0 00-5 5v10a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V9a5.006 5.006 0 00-5-5zM9.276 2.39a1.006 1.006 0 01.792-.39h3.864a1.008 1.008 0 01.792.39L15.966 4H8.034zM22 19a3 3 0 01-3 3H5a3 3 0 01-3-3V9a3 3 0 013-3h14a3 3 0 013 3z" />
      <Path d="M12 8a6 6 0 106 6 6.006 6.006 0 00-6-6zm0 10a4 4 0 114-4 4 4 0 01-4 4z" />
    </Svg>
  );
}

export default SvgCamera;
