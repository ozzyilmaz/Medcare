import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHome(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 23.986"
      fill="black"
      {...props}>
      <Path d="M23.121 9.048l-7.585-7.586a5.008 5.008 0 00-7.072 0L.879 9.048A2.978 2.978 0 000 11.169v9.817a3 3 0 003 3h18a3 3 0 003-3v-9.817a2.978 2.978 0 00-.879-2.121zM15 21.986H9v-3.934a3 3 0 116 0zm7-1a1 1 0 01-1 1h-4v-3.934a5 5 0 10-10 0v3.934H3a1 1 0 01-1-1v-9.817a1.008 1.008 0 01.293-.707l7.585-7.583a3.008 3.008 0 014.244 0l7.585 7.586a1.008 1.008 0 01.293.7z" />
    </Svg>
  );
}

export default SvgHome;
