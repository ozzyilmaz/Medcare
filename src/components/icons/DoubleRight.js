import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDoubleRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 20.845 17.389"
      {...props}>
      <Path
        data-name="Path 48"
        d="M5.693 4.33c3.122 2.383 5.672 4.346 5.672 4.362S3.636 14.63.396 17.086l-.4.3v-4.35l2.857-2.163C4.42 9.681 5.706 8.702 5.706 8.69s-1.285-1-2.853-2.183L-.004 4.344V2.169c0-1.192 0-2.171.008-2.171S2.571 1.951 5.693 4.33z"
        fill="#505050"
      />
      <Path
        data-name="Path 49"
        d="M15.201 4.346c3.1 2.363 5.636 4.314 5.644 4.338.012.041-11.267 8.66-11.337 8.66a21.434 21.434 0 01-.033-2.151l.012-2.155 2.836-2.151c1.559-1.188 2.836-2.175 2.836-2.2s-1.277-1.008-2.836-2.2L9.488 4.346l-.015-2.154A12.129 12.129 0 019.514.045c.031.001 2.59 1.935 5.687 4.301z"
        fill="#505050"
      />
    </Svg>
  );
}

export default SvgDoubleRight;