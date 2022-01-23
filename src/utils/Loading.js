import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import Box from '../components/box';

export default Loading = () => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <ActivityIndicator size="large" color="#00f" />
    </Box>
  );
};
