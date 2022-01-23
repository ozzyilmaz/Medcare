import React from 'react';
import {SafeAreaView, FlatList, StatusBar, Platform} from 'react-native';

import Box from '../components/box';
import Text from '../components/text';

import DoitCard from '../components/doitCard';

import DATA from '../DATAS/doitData';

function doit() {
  return (
    <Box flex={1} marginBottom={Platform.OS === 'ios' ? 77 : 10}>
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
              Do it
            </Text>
          </Box>
        </Box>
      </Box>
      <Box flex={1} bg="white">
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return (
              <DoitCard
                title={item.title}
                desc={item.description}
                img={item.img}
              />
            );
          }}
        />
      </Box>
    </Box>
  );
}

export default doit;
