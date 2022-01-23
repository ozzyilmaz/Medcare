import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {
  position,
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(color, size, position, space, flexbox, layout, borderRadius),
);

Button.defaultProps = {};

export default Button;
