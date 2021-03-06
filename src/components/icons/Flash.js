import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFlash(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 18.898 31.744"
      fill="black"
      {...props}>
      <Path
        data-name="Path 28"
        d="M10.255 30.621c.11-.087 1.254-2.311 3.9-7.608 2.056-4.118 3.74-7.538 3.74-7.6a.537.537 0 00-.273-.459 22.779 22.779 0 00-2.73-.064 12.727 12.727 0 01-2.555-.07c.012-.041 1.272-3.032 2.794-6.644s2.767-6.633 2.767-6.698a.652.652 0 00-.476-.47.529.529 0 00-.267.093c-.122.081-15.762 18.614-16 18.956a.461.461 0 00.046.61l.139.145h3.032a15.991 15.991 0 013 .076c-.012.035-1.3 2.068-2.84 4.513s-2.846 4.5-2.881 4.571a.53.53 0 00.076.627l.139.145h4.118c4.108-.001 4.114-.001 4.271-.123z"
        fill="none"
        stroke="#000"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default SvgFlash;
