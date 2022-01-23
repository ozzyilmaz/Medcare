import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function SvgSearch(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 35 35"
      {...props}>
      <G data-name="Group 141" transform="translate(2763.9 1844)">
        <Circle
          data-name="Ellipse 7"
          cx={17.5}
          cy={17.5}
          r={17.5}
          transform="translate(-2763.9 -1844)"
        />
        <Path
          d="M-2736.511-1817.766l-4.875-4.875a8.181 8.181 0 10-1.155 1.155l4.872 4.878a.819.819 0 001.158-1.158zm-11.2-3.5a6.534 6.534 0 114.624-1.913 6.534 6.534 0 01-4.62 1.913z"
          fill="black"
        />
      </G>
    </Svg>
  );
}

export default SvgSearch;
