import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBookmark(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 15 16.004"
      fill="currentColor"
      {...props}>
      <Path d="M13.048 16a1.931 1.931 0 01-1.355-.557L7.5 11.368l-4.193 4.079a1.941 1.941 0 01-2.11.406A1.867 1.867 0 010 14.1V3.334A3.372 3.372 0 013.409 0h8.182A3.372 3.372 0 0115 3.334V14.1a1.867 1.867 0 01-1.194 1.749 1.993 1.993 0 01-.758.151zM3.409 1.333a2.023 2.023 0 00-2.045 2V14.1a.562.562 0 00.353.52.584.584 0 00.626-.12l4.68-4.544a.693.693 0 01.961 0l4.674 4.544a.584.584 0 00.626.12.562.562 0 00.353-.52V3.334a2.023 2.023 0 00-2.045-2z" />
    </Svg>
  );
}

export default SvgBookmark;
