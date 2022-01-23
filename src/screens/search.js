import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  Platform,
  StatusBar,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import Box from '../components/box';
import Button from '../components/button';
import {Back, SearchInside} from '../components/icons';
import Input from '../components/input';
import Text from '../components/text';

import firestore, {firebase} from '@react-native-firebase/firestore';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function SearchFunc({navigation}) {
  const [isFocusSearch, setFocusSearch] = useState(false);
  const [medicine, setMedicine] = useState([]);
  const [textInputValue, setTextInputValue] = useState('');

  const myEmail = firebase.auth()?.currentUser?.email;

  const fetchMedicine = search => {
    firestore()
      .collection('users')
      .doc(myEmail)
      .collection('medicineData')
      .where('medicineName', '>=', search)
      .limit(3) // arama limiti
      .onSnapshot(querySnapshot => {
        const alldatas = querySnapshot.docs.map(doc => doc.data());
        setMedicine(alldatas);
      });
  };

  ////

  const onCancel = () => {
    setFocusSearch(false);
    Keyboard.dismiss();
  };

  return (
    <Box
      as={SafeAreaView}
      flex={1}
      bg="#E84545"
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <Box
        flexDirection="row"
        paddingBottom={20}
        marginLeft={2}
        alignItems="center">
        <Box
          as={Button}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back color="white" />
        </Box>
        <Text
          marginLeft={2}
          fontFamily="Montserrat-SemiBold"
          fontSize={18}
          color="white">
          Look for medicine
        </Text>
      </Box>
      <Box bg="white" flex={1}>
        {isFocusSearch ? (
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
            marginTop={20}>
            <Box
              bg="white"
              width={WIDTH / 1.39}
              height={38}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
              }}>
              <Box flexDirection="row">
                <Box mt={1}>
                  <SearchInside width={30} height={30} />
                </Box>

                <Input
                  width="80%"
                  height={40}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onFocus={() => setFocusSearch(true)}
                  value={textInputValue}
                  onChangeText={search => {
                    fetchMedicine(search);
                    setTextInputValue(search);
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box as={Button} onPress={onCancel}>
                <Text fontFamily="Montserrat-SemiBold" ml={1} fontSize={14}>
                  Cancel
                </Text>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
            marginTop={20}>
            <Box
              bg="white"
              width={WIDTH / 1.1}
              height={38}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
              }}>
              <Box flexDirection="row">
                <Box mt={1}>
                  <SearchInside width={30} height={30} />
                </Box>

                <Input
                  width="80%"
                  height={35}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onFocus={() => setFocusSearch(true)}
                />
              </Box>
            </Box>
          </Box>
        )}
        <Box ml={18} mt={3}>
          <Text fontFamily="Montserrat-Bold" fontSize={15}>
            Results
          </Text>
        </Box>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={medicine}
          renderItem={({item}) => (
            <Box
              as={Button}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              ml={20}
              mr={30}
              mt={item.id == 1 ? 18 : 3}
              onPress={() => {
                //navigation.navigate()
              }}>
              <Box flexDirection="row" alignItems="center">
                <Box as={Button}>
                  <Image
                    style={{width: 50, height: 50, borderRadius: 99}}
                    source={{uri: item.medicineImage}}
                  />
                </Box>
                <Box ml={2}>
                  <Text fontFamily="Montserrat-SemiBold">
                    {item.medicineName}
                  </Text>
                  <Text fontFamily="Montserrat-Medium" opacity={0.5}>
                    {item.medicineFrequency}
                  </Text>
                </Box>
              </Box>
              <Box as={Button}>
                <Text
                  fontFamily="Montserrat-Medium"
                  fontSize={16}
                  opacity={0.8}></Text>
              </Box>
            </Box>
          )}
        />
      </Box>
    </Box>
  );
}

export default SearchFunc;
