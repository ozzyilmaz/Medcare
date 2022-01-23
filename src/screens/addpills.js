import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Box from '../components/box';
import Button from '../components/button';
import Input from '../components/input';
import Text from '../components/text';
import firestore, {firebase} from '@react-native-firebase/firestore';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import {Picker} from '@react-native-picker/picker';

const AddPills = ({navigation}) => {
  const TimeZone = [
    {
      item: 'After Breakfast',
      id: '1',
    },
    {
      item: 'After Lunch',
      id: '2',
    },
    {
      item: 'After Dinner',
      id: '3',
    },
    {
      item: 'Before Breakfast',
      id: '4',
    },
    {
      item: 'Before Lunch',
      id: '5',
    },
    {
      item: 'Before Dinner',
      id: '6',
    },
  ];

  const [selectedPill, setSelectedPill] = useState('pill');
  const [medicineName, setMedicineName] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('Day');
  const [selectedFrequency, setSelectedFrequency] = useState('Important');
  const [medicineImage, setMedicineImage] = useState(
    'https://www.pngrepo.com/download/189223/drugs-drug.png',
  );
  const [selectedTime, setselectedTime] = useState([]);

  const myEmail = firebase.auth()?.currentUser?.email;

  // O gün kaç ilaç girildiği bilgisini tutmak için
  const todaySumMedicine = async () => {
    let monthId = (new Date().getMonth() + 1).toString();
    let dayId = new Date().getDate().toString();

    await firestore()
      .collection('users')
      .doc(myEmail)
      .collection('medicineStatistic')
      .doc(monthId)
      .collection('days')
      .doc(dayId)
      .set(
        {
          totalMedicine: firebase.firestore.FieldValue.increment(1),
          medicineAdded: dayId,
        },
        {merge: true},
      );
  };

  const saveMedicine = async (
    medicineName,
    medicineType,
    medicineTime,
    medicineDuration,
    medicineFrequency,
    medicineImage,
  ) => {
    var tempId = new Date().toString();

    await firestore()
      .collection('users')
      .doc(myEmail)
      .collection('medicineData')
      .doc(tempId)
      .set(
        {
          medicineName: medicineName,
          medicineType: medicineType,
          medicineTime: medicineTime,
          medicineDuration: medicineDuration,
          medicineFrequency: medicineFrequency,
          isActive: false,
          medicineId: tempId,
          medicineImage: medicineImage,
        },
        {merge: true},
      );
    todaySumMedicine();
  };
  function onMultiChange() {
    return item => setselectedTime(xorBy(selectedTime, [item], 'id'));
  }
  return (
    <Box as={ScrollView} flex={1} marginBottom={Platform.OS === 'ios' ? 77 : 0}>
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
      <Box marginTop={3} justifyContent="center" alignItems="center">
        <Image
          style={{width: 120, height: 120, borderRadius: 20}}
          source={{
            uri: 'https://png.pngtree.com/png-vector/20190615/ourlarge/pngtree-medicinepillcapsuledrugstablet-flat-color-icon-vector-png-image_1486933.jpg',
          }}
        />
      </Box>
      <Box marginTop={3} marginLeft={2}>
        <Text color="black" fontSize={24} fontFamily="Futura-Medium">
          Medicine Name
        </Text>
      </Box>
      <Box marginTop={2} justifyContent="center" alignItems="center">
        <Input
          pl={20}
          mt={1}
          width="95%"
          height={50}
          bg="#f6f3ee"
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 3,
          }}
          borderRadius={10}
          placeholder="Please enter a medicine name"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={newText => setMedicineName(newText)}
          defaultValue={medicineName}
        />
      </Box>

      <Box marginTop={3} marginLeft={2}>
        <Text color="black" fontSize={24} fontFamily="Futura-Medium">
          Type
        </Text>
      </Box>
      <Box marginTop={3} height={110}>
        <Box
          as={ScrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Box
            as={Button}
            marginLeft={3}
            onPress={() => {
              setSelectedPill('pill');
              setMedicineImage(
                'https://www.pngrepo.com/download/189223/drugs-drug.png',
              );
            }}
            bg={selectedPill === 'pill' ? '#d5bbfe' : 'white'}
            width={100}
            height={100}
            alignItems="center"
            justifyContent="center"
            borderRadius={20}
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
              style={{width: 60, height: 60}}
              source={{
                uri: 'https://www.pngrepo.com/download/189223/drugs-drug.png',
              }}
            />
          </Box>
          <Box
            as={Button}
            marginLeft={3}
            onPress={() => {
              setSelectedPill('syringe');
              setMedicineImage(
                'https://www.nicepng.com/png/full/394-3947366_nurse-assistant-school-syringe-vector.png',
              );
            }}
            bg={selectedPill === 'syringe' ? '#d5bbfe' : 'white'}
            width={100}
            height={100}
            alignItems="center"
            justifyContent="center"
            borderRadius={20}
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
              style={{width: 60, height: 60}}
              source={{
                uri: 'https://www.nicepng.com/png/full/394-3947366_nurse-assistant-school-syringe-vector.png',
              }}
            />
          </Box>
          <Box
            as={Button}
            marginLeft={3}
            onPress={() => {
              setSelectedPill('ointment');
              setMedicineImage(
                'data:image/png;base64,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',
              );
            }}
            bg={selectedPill === 'ointment' ? '#d5bbfe' : 'white'}
            width={100}
            height={100}
            alignItems="center"
            justifyContent="center"
            borderRadius={20}
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
              style={{width: 60, height: 60}}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            />
          </Box>
          <Box
            as={Button}
            marginLeft={3}
            onPress={() => {
              setSelectedPill('syrup');
              setMedicineImage(
                'https://www.pngrepo.com/png/165907/512/syrup.png',
              );
            }}
            bg={selectedPill === 'syrup' ? '#d5bbfe' : 'white'}
            width={100}
            height={100}
            alignItems="center"
            justifyContent="center"
            borderRadius={20}
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
              style={{width: 60, height: 60}}
              source={{
                uri: 'https://www.pngrepo.com/png/165907/512/syrup.png',
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box marginTop={3} marginLeft={2}>
        <Text color="black" fontSize={24} fontFamily="Futura-Medium" mb={-3}>
          Time {'&'} Shedule
        </Text>
        <SelectBox
          label=""
          options={TimeZone}
          selectedValues={selectedTime}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
      </Box>
      {/* time and duration */}
      <Box flexDirection="row" justifyContent="space-between">
        <Box
          bg="white"
          mx={20}
          width={150}
          borderRadius={15}
          mt={2}
          justifyContent="space-between"
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
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                marginLeft: 3,
                marginTop: 10,
              }}
              source={{
                uri: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png',
              }}
            />
            <Text mr={2} mt={1} fontSize={15} fontFamily="Montserrat-Medium">
              Duration
            </Text>
          </Box>
          <Box>
            <Picker
              selectedValue={selectedDuration}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDuration(itemValue)
              }>
              <Picker.Item label="Day" value="Day" />
              <Picker.Item label="Week" value="Week" />
              <Picker.Item label="Month" value="Month" />
            </Picker>
          </Box>
        </Box>
        <Box
          bg="white"
          mx={20}
          width={150}
          borderRadius={15}
          mt={2}
          justifyContent="space-between"
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
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                marginLeft: 3,
                marginTop: 10,
              }}
              source={{
                uri: 'https://www.clipartmax.com/png/middle/275-2751393_alarm-clock-free-icon-clock-icon.png',
              }}
            />
            <Text mr={2} mt={1} fontSize={15} fontFamily="Montserrat-Medium">
              Importance
            </Text>
          </Box>
          <Box>
            <Picker
              selectedValue={selectedFrequency}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedFrequency(itemValue)
              }>
              <Picker.Item label="Important" value="Important" />
              <Picker.Item label="Crucial" value="Crucial" />
              <Picker.Item label="Vital" value="Vital" />
            </Picker>
          </Box>
        </Box>
      </Box>

      <Box
        as={Button}
        marginTop={3}
        bg="#d5bbfe"
        width={200}
        height={50}
        alignSelf="center"
        justifyContent="center"
        alignItems="center"
        borderRadius={20}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
        onPress={() => {
          medicineName != '' && selectedTime
            ? (saveMedicine(
                medicineName,
                selectedPill,
                selectedTime,
                selectedDuration,
                selectedFrequency,
                medicineImage,
              ),
              navigation.navigate('HomePage'))
            : alert('Please fill in the required fields');
        }}>
        <Text color="black" fontSize={24} fontFamily="Futura-Medium">
          Add Reminder
        </Text>
      </Box>
    </Box>
  );
};

export default AddPills;
