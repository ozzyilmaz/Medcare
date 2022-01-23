import {TextInput} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  space,
  borderRadius,
  shadow,
  backgroundColor,
} from 'styled-system';

import theme from '../utils/theme';

const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: '#999',
}))(compose(color, size, shadow, space, typography, borderRadius));

export default Input;
