import React from 'react';
import {Platform, SafeAreaView, StatusBar, Image} from 'react-native';
import Box from '../components/box';
import Text from '../components/text';

const readDetailst = ({route, navigation}) => {
  const textTitle = route.params.textTitle;
  const textImage = route.params.textImage;
  const textDescription = route.params.textDescription;
  return (
    <Box flex={1} marginBottom={Platform.OS === 'ios' ? 77 : 60}>
      <Box
        as={SafeAreaView}
        bg="#E84545"
        style={{
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingBottom={2}>
          <Box marginTop={10} marginLeft={12}>
            <Text color="white" fontSize={28} fontFamily="Futura-Medium">
              Medcare
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        mx={2}
        mt={2}
        backgroundColor="white"
        borderRadius={15}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        {/* İmage */}
        <Box mt={3} justifyContent="center" alignItems="center">
          <Image
            style={{width: 300, height: 180, borderRadius: 10}}
            source={{uri: textImage}}
          />
        </Box>
        {/* title */}
        <Box mt={3} justifyContent="center" alignItems="center">
          <Text fontFamily="Futura-Bold" fontSize={20}>
            {textTitle}
          </Text>
        </Box>
        {/* description */}
        <Box mt={2} mx={3} my={3}>
          <Text fontFamily="Futura-Bold" fontSize={16}>
            {textDescription}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default readDetailst;
