import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAddmessage(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 512 512"
      {...props}>
      <Path d="M104 11.5c-.8.2-4.9.9-9 1.5-37.8 6.2-69.4 35.8-80.3 75.5l-2.2 8v118c0 118 0 118 2.2 126.1 5.1 19.3 14.5 35.4 28 48.5 13.1 12.6 25.8 20.1 43.8 25.6l9 2.7 45.5.4 45.5.3 34.8 34.7 34.7 34.7 34.8-34.7 34.7-34.7 45.5-.3 45.5-.4 9-2.7c38-11.6 64.9-40.6 72.6-78.5 1.9-8.9 1.9-14.4 1.6-125-.3-115.6-.3-115.7-2.5-123.3-11.2-38.8-38-64.7-77.2-74.6-5.9-1.5-21.3-1.7-160.5-1.9-84.7-.1-154.7-.1-155.5.1zM413.4 54c10.2 2.6 18.7 7.2 26.3 14.3 8 7.5 12.9 15.1 16.7 25.7l3.1 8.5v112c0 105.9-.1 112.3-1.8 118-6.4 20.7-21.8 36.3-42.7 43.1-4.9 1.6-10.6 1.8-56 2.1l-50.5.4-26.2 26.2-26.3 26.2-26.2-26.2-26.3-26.2-50.5-.4c-45.4-.3-51.1-.5-56-2.1-20.9-6.8-36.3-22.4-42.7-43.1-1.7-5.7-1.8-12.1-1.8-118v-112l2.7-8C62 74.6 78.3 59.2 98.2 54c7-1.8 12.9-1.9 157.4-1.9 146.3-.1 150.3 0 157.8 1.9z" />
      <Path d="M236 153.5V194l-40.7.2-40.8.3-.3 20.2-.2 20.3h82v82h40l.2-40.8.3-40.7 40.8-.3 40.7-.2v-41h-82v-81h-40v40.5z" />
    </Svg>
  );
}

export default SvgAddmessage;
