import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWrite(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 512 512"
      {...props}>
      <Path d="M406.7 43.6c-13.5 3.2-13.7 3.4-66.2 55.1-63.3 62.2-133 132.2-134.4 135-1.6 3.1-16.1 69.3-16.1 73.5 0 7.4 8 14.8 16 14.8 4.1 0 62.9-12.5 70.6-15 2.1-.7 31.7-29.8 93.5-91.8 96.5-96.8 94.2-94.3 98.3-108.1 2.3-7.8 2.1-21.3-.4-29.3-7.8-25.4-35.1-40.6-61.3-34.2zM427.2 76c.3 0 2.1 1.2 3.8 2.6 6.7 5.7 8.9 15.8 5.1 23.2-1.1 2.1-39.8 41.5-87.9 89.6l-85.9 85.8-17.3 3.9c-9.5 2.2-17.5 3.8-17.7 3.6-.2-.2 1.4-8.2 3.6-17.7l3.9-17.3 83.3-83.4c45.9-45.9 85.1-84.8 87.3-86.6 4.8-3.8 11.5-5.6 17-4.6 2.3.5 4.4.8 4.8.9z" />
      <Path d="M133 97.5c-24.6 3.9-46.1 14.8-64.7 32.8-19 18.4-30.9 41.4-34.9 67.7-2.1 13.9-2.1 166.1 0 180 4 26.1 14.9 47.6 34 66.6 19 19.1 40.5 30 66.6 34 13.9 2.1 166.1 2.1 180 0 26.4-4 49.2-15.8 67.7-34.9 14.2-14.7 22.8-29 28.8-47.9 5-15.7 5.5-23 5.5-77.7 0-49-.1-50.6-2.1-54.7-4-8.4-14.3-11.4-22.2-6.5-7.4 4.6-7.1 2.3-7.7 63.1-.6 52.4-.7 54.8-2.8 62.5-8.5 30.6-30 52.5-60.9 62.2l-8.8 2.8h-175l-8.8-2.8c-30.3-9.5-50.9-30.1-60.4-60.4l-2.8-8.8v-175l2.8-8.8c9.5-30.4 30.2-51.1 60.4-60.4l8.8-2.7 55-.6c61.4-.6 59-.3 63.6-7.7 4.7-7.6 2.1-17.6-5.9-22.1-4-2.2-4.1-2.2-55.8-2.1-37.9.1-54.2.5-60.4 1.4z" />
    </Svg>
  );
}

export default SvgWrite;
