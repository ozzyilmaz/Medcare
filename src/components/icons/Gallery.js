import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGallery(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      {...props}>
      <Path d="M19 0H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM5 2h14a3 3 0 013 3v14a2.951 2.951 0 01-.3 1.285l-9.163-9.163a5 5 0 00-7.072 0L2 14.586V5a3 3 0 013-3zm0 20a3 3 0 01-3-3v-1.586l4.878-4.878a3 3 0 014.244 0l9.163 9.164A2.951 2.951 0 0119 22z" />
      <Path d="M16 10.5A3.5 3.5 0 1012.5 7a3.5 3.5 0 003.5 3.5zm0-5A1.5 1.5 0 1114.5 7 1.5 1.5 0 0116 5.5z" />
    </Svg>
  );
}

export default SvgGallery;
