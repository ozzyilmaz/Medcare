import React from 'react';
import {FlatList, Image, SafeAreaView, StatusBar} from 'react-native';
import Box from '../components/box';
import Button from '../components/button';
import Text from '../components/text';

import CircularProgress from 'react-native-circular-progress-indicator';
import {ScrollView} from 'react-native-gesture-handler';

const Addict = ({navigation}) => {
  const daysAddict = [
    {
      id: '1',
      title: 'SUN',
      day: '1',
      hasDone: 'true',
    },
    {
      id: '2',
      title: 'MON',
      day: '2',
      hasDone: 'true',
    },
    {
      id: '3',
      title: 'TUE',
      day: '3',
      hasDone: 'true',
    },
    {
      id: '4',
      title: 'WED',
      day: '4',
      hasDone: 'true',
    },
    {
      id: '5',
      title: 'THU',
      day: '5',
      hasDone: 'true',
    },
    {
      id: '6',
      title: 'FRI',
      day: '6',
      hasDone: 'false',
    },
    {
      id: '7',
      title: 'SAT',
      day: '7',
      hasDone: 'false',
    },
    {
      id: '8',
      title: 'SUN',
      day: '8',
      hasDone: 'false',
    },
    {
      id: '9',
      title: 'MON',
      day: '9',
      hasDone: 'false',
    },
    {
      id: '10',
      title: 'TUE',
      day: '10',
      hasDone: 'false',
    },
    {
      id: '11',
      title: 'WED',
      day: '11',
      hasDone: 'false',
    },
  ];

  const flatlistMilestones = [
    {
      id: '1',
      title: 'Milestones',
      navigation: 'milestones',
      color: '#cbdea6',
      imageData:
        'https://i.pinimg.com/originals/40/1b/31/401b31cb214385088e3b636159bdbdf2.png',
    },
    {
      id: '2',
      title: 'DO IT',
      navigation: 'doit',

      color: '#ffc0b4',
      imageData:
        'https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?size=626&ext=jpg',
    },
    {
      id: '3',
      title: 'Recommends',
      navigation: 'recommends',

      color: '#fab666',
      imageData:
        'https://freedesignfile.com/upload/2017/07/Businessman-Silhouette-Ladder-To-Success-vector.jpg',
    },
    {
      id: '4',
      title: 'History',
      navigation: 'history',

      color: '#03aaf9',
      imageData:
        'data:image/jpeg;base64,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',
    },
  ];

  const renderMedicineItem = ({item}) => {
    return (
      <Box
        height={70}
        as={Button}
        bg={item.color}
        marginBottom={3}
        borderRadius={20}
        justifyContent="space-between"
        flexDirection="row"
        onPress={() => {
          navigation.navigate(item.navigation);
        }}>
        <Box justifyContent="center" marginLeft={2}>
          <Image
            style={{width: 50, height: 50, borderRadius: 15}}
            source={{uri: item.imageData}}
          />
        </Box>

        <Box justifyContent="space-between" alignItems="center">
          <Box marginTop={2}>
            <Text fontFamily="Futura-Bold" fontSize={16}>
              {item.title}
            </Text>
          </Box>
        </Box>

        <Box>
          <Text color="white">.</Text>
        </Box>
      </Box>
    );
  };

  const renderDaysItem = ({item}) => {
    return (
      <Button
        justifyContent="space-between"
        alignItems="center"
        marginLeft={item.id === '1' ? -2 : -80}
        marginRight={item.id === '11' ? 15 : 5}>
        <Box alignItems="center">
          <Text fontFamily="Futura-Medium" marginTop={10}>
            {item.title}
          </Text>
          <Box marginTop={-2} padding={15}>
            <Box
              bg={item.hasDone === 'true' ? '#00cc1a' : 'white'}
              width={50}
              height={50}
              borderRadius={15}
              justifyContent="center"
              alignItems="center"
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
              <Text fontFamily="Futura-Bold">{item.day}</Text>
            </Box>
          </Box>
        </Box>
      </Button>
    );
  };
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
      {/* Flatlist recovery days */}
      <Box
        bg="white"
        borderBottomRightRadius={25}
        borderBottomLeftRadius={25}
        marginTop={0}
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
        <Box
          marginLeft={10}
          marginTop={15}
          marginBottom={2}
          flexDirection="row"
          justifyContent="space-between">
          <Box>
            <Text fontFamily="Futura-Medium" fontSize={30}>
              20 DAYS
            </Text>
            <Text fontFamily="Futura-Medium" fontSize={24} color="#03aaf9">
              until recovery
            </Text>
          </Box>
          <Box marginRight={20} marginTop={2}>
            <CircularProgress
              valueSuffix={'%'}
              radius={35}
              value={80}
              activeStrokeColor={'#80cc00'}
              inActiveStrokeColor={'#B4C7BF'}
              inActiveStrokeOpacity={0.2}
              activeStrokeWidth={5}
              inActiveStrokeWidth={5}
            />
          </Box>
        </Box>
        <FlatList
          data={daysAddict}
          renderItem={renderDaysItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Box>
      <Box marginTop={3} flexDirection="row" justifyContent="space-evenly">
        <Box
          as={Button}
          marginLeft={3}
          bg="#fdf3f1"
          width={150}
          height={100}
          borderRadius={20}
          alignItems="center"
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
          <Text fontFamily="Futura-Bold" marginTop={10}>
            Current Savings
          </Text>
          <Text fontFamily="Futura-Medium" marginTop={15}>
            $1340.0
          </Text>
          <Text marginTop={15} fontSize={10}>
            Expected Savings: $10.000
          </Text>
        </Box>
        <Box
          as={Button}
          marginRight={3}
          bg="#e5f0f1"
          width={150}
          height={100}
          borderRadius={20}
          alignItems="center"
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
          <Text fontFamily="Futura-Bold" marginTop={10}>
            Sober for
          </Text>
          <Text fontFamily="Futura-Medium" marginTop={15}>
            87 days
          </Text>
          <Text marginTop={15} fontSize={10}>
            Expected Savings: 100 days
          </Text>
        </Box>
      </Box>
      <Box
        as={ScrollView}
        marginTop={3}
        mx={15}
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
        <FlatList
          data={flatlistMilestones}
          renderItem={renderMedicineItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
};

export default Addict;
