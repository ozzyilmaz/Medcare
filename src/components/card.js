import React from 'react';
import Box from './box';
import Text from './text';
import {Image} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

export function RecommedsCard({title, descriptions, imgUrl, value}) {
  return (
    <Box backgroundColor="#fafafa" borderRadius={10} mx={2} mb={3}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mx={20}>
        <Box flex={0.3}>
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{width: 60, height: 60}}
          />
        </Box>

        <Box flex={0.7}>
          <Text fontSize={15} fontWeight="bold">
            {title}
          </Text>
          <Text>{descriptions}</Text>
        </Box>
        <Box flex={0.3}>
          <CircularProgress
            inActiveStrokeColor={'#2ecc71'}
            inActiveStrokeOpacity={0.2}
            radius={40}
            value={value}
            activeStrokeColor={value >= 50 ? 'green' : 'orange'}
            inActiveStrokeColor={'#B4C7BF'}
            activeStrokeWidth={8}
            inActiveStrokeWidth={5}
            textColor={'black'}
            valuePrefix={'%'}
            duration={2000}
          />
        </Box>
      </Box>
    </Box>
  );
}
export function NotificationsCard({descriptions, imgUrl}) {
  return (
    <Box backgroundColor="#fafafa" borderRadius={10} mb={2}>
      <Box
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        mx={10}>
        <Box ml={3} flex={0.3}>
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{width: 50, height: 50}}
          />
        </Box>

        <Box flex={0.99}>
          <Text fontSize={12.8} fontWeight="600">
            {descriptions}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
