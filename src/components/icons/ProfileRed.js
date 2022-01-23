import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function SvgProfileRed(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 30 30"
      fill="black"
      {...props}>
      <G data-name="Group 146">
        <G data-name="Ellipse 12" fill="#f75757" stroke="#000">
          <Circle cx={15} cy={15} r={15} stroke="none" />
          <Circle cx={15} cy={15} r={14.5} fill="none" />
        </G>
        <Path
          data-name="Path 31"
          d="M15 14a6 6 0 10-6-6 6 6 0 006 6zm0-10a4 4 0 11-4 4 4 4 0 014-4z"
        />
        <Path
          data-name="Path 32"
          d="M15 16a9.01 9.01 0 00-9 9 1 1 0 102 0 7 7 0 1114 0 1 1 0 002 0 9.01 9.01 0 00-9-9z"
        />
      </G>
    </Svg>
  );
}

export default SvgProfileRed;
