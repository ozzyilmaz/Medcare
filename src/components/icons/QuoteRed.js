import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgQuoteRed(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 27.967 23.986"
      fill="black"
      {...props}>
      <G data-name="Group 145">
        <Path
          data-name="Path 37"
          d="M3.256 8.152l12.418-3.555 3.01-2.643 8.513 8.142-2.574 3.14-6.179 4.9a4.927 4.927 0 00-2.135-2.667 21.806 21.806 0 00-4.455-1.79L1.372 17.267z"
          fill="#f75757"
        />
        <Path d="M0 22.821v-8.156A10.5 10.5 0 0110.487 4.178h5.628V2.33A2.33 2.33 0 0120.092.686l6.851 6.85a3.5 3.5 0 010 4.943l-6.851 6.85a2.33 2.33 0 01-3.978-1.648V15.83H9.321a7 7 0 00-6.991 6.991 1.165 1.165 0 11-2.33 0zM18.445 5.343a1.165 1.165 0 01-1.165 1.165h-6.793a8.165 8.165 0 00-8.157 8.157v2a9.3 9.3 0 016.991-3.162h7.958a1.165 1.165 0 011.165 1.165v3.013l6.85-6.85a1.165 1.165 0 000-1.648l-6.85-6.85z" />
      </G>
    </Svg>
  );
}

export default SvgQuoteRed;
