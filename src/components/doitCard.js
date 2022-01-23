import React, {useState} from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Box from './box';
import Text from './text';
import Button from './button';

function DoitCard({title, desc, img}) {
  const [detailShow, setDetailShow] = useState(false);

  return (
    <Box>
      <Box
        width="94%"
        height={150}
        borderRadius={10}
        alignSelf="center"
        mt={10}
        bg="white"
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
        <Image
          style={{width: '100%', height: '100%', borderRadius: 10}}
          source={{
            uri: img,
          }}
        />
        <Box
          bg="white"
          width="100%"
          opacity={0.6}
          height={50}
          style={{position: 'absolute', bottom: 0}}></Box>
        <Text
          style={{
            position: 'absolute',
            bottom: 12,
            left: 15,
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 20,
          }}>
          {title}
        </Text>
        <Box
          as={Button}
          onPress={() => {
            setDetailShow(!detailShow);
          }}>
          <MaterialCommunityIcons
            style={{
              position: 'absolute',
              bottom: detailShow ? 10 : 12,
              right: 15,
              transform: [{rotate: !detailShow ? '180deg' : '0deg'}],
            }}
            name="apple-keyboard-control"
            color="black"
            size={30}
          />
        </Box>
      </Box>
      {detailShow && (
        <Box
          bg="white"
          width="88%"
          alignSelf="center"
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text m={10}>{desc}</Text>
        </Box>
      )}
    </Box>
  );
}

export default DoitCard;
