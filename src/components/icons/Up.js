import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUp(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 512 512"
      {...props}>
      <Path d="M245 118.1c-3.5 1.5-30.4 27.9-122.3 119.7C53.4 307 4 357.1 2.9 359.3c-6.3 12.1-1.1 27.9 11.2 34.1 6.8 3.3 16.2 3.6 22.9.5 3.5-1.5 28.4-25.9 111.8-109.2L256 177.5l107.3 107.2C446.6 368 471.5 392.4 475 393.9c6.7 3.1 16.1 2.8 22.9-.5 12.3-6.2 17.5-22 11.2-34.1-1.1-2.2-50.5-52.3-119.8-121.5C297.4 146 270.5 119.6 267 118.1c-3-1.4-6.6-2.1-11-2.1s-8 .7-11 2.1z" />
    </Svg>
  );
}

export default SvgUp;
