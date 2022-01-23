import {View} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  shadow,
  border,
  size,
  space,
  flexbox,
  borderRadius,
} from 'styled-system';

const Box = styled(View)(
  compose(color, border, shadow, size, space, flexbox, borderRadius),
);

export default Box;
