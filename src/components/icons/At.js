import * as React from 'react';
import Svg, {Text, TSpan} from 'react-native-svg';

function SvgAt(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 27 32"
      {...props}>
      <Text
        data-name="@"
        transform="translate(0 25)"
        fontSize={26}
        fontFamily="Montserrat-Medium, Montserrat"
        fontWeight={500}
        fill="currentColor"
        stroke="currentColor">
        <TSpan x={0} y={0}>
          {'@'}
        </TSpan>
      </Text>
    </Svg>
  );
}

export default SvgAt;
