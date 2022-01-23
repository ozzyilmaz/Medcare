import React, {useContext, useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Box from '../components/box';
import Button from '../components/button';
import Text from '../components/text';
import {Push, Search} from '../components/icons';
import {AuthContext} from '../navigation/AuthProvider';
import firestore, {firebase} from '@react-native-firebase/firestore';
import Moment from 'moment';
import NotificationPopup from 'react-native-push-notification-popup';
import CircularProgress from 'react-native-circular-progress-indicator';

const Home = ({navigation}) => {
  const myEmail = firebase.auth()?.currentUser?.email;
  const [isFocus, setFocus] = useState('today');
  const [allMedicineToday, setallMedicineToday] = useState([]);
  const [allPercentage, setAllPercentage] = useState([]);
  const [newPush, setnewPush] = useState(0); ////////// for notification
  const [newPushInfo, setnewPushInfo] = useState([]); /////////////// for notification

  const {signout} = useContext(AuthContext);

  const medicineData2 = [
    {
      id: '9',
      title: 'Budesonid-12',
      imageData:
        'https://thumbs.dreamstime.com/b/medicine-set-plastic-tube-bottle-blister-pack-pills-capsules-drug-medication-collection-cartoon-realistic-flat-illustration-168220145.jpg',
      medicineTime1: '',
      medicineTime2: '',
      medicineTime3: 'After Dinner',
    },
    {
      id: '5',
      title: 'brinzolamid',
      imageData:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvIhqaH2kA6t-Iwyv-6N1WDOo5oKrwEVkyw&usqp=CAU',
      medicineTime1: '',
      medicineTime2: '',
      medicineTime3: 'Before Slept',
    },
    {
      id: '6',
      title: 'ofatumumab',
      imageData:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_w_HtuglFnnhxLC8Zf5a_XjNxIFEU87ygA&usqp=CAU',
      medicineTime1: 'After Breakfast',
      medicineTime2: '',
      medicineTime3: 'AfterDinner',
    },
    {
      id: '7',
      title: 'Somon kalsitonin',
      imageData:
        'https://thumbs.dreamstime.com/b/medicine-syringe-icon-cartoon-illustration-medicine-syringe-vector-icon-web-medicine-syringe-icon-cartoon-style-111519638.jpg',
      medicineTime1: 'Before Breakfast',
      medicineTime2: '',
      medicineTime3: '',
    },
    {
      id: '8',
      title: 'Budesonid-X2',
      imageData:
        'https://thumbs.dreamstime.com/b/medicine-set-plastic-tube-bottle-blister-pack-pills-capsules-drug-medication-collection-cartoon-realistic-flat-illustration-168220145.jpg',
      medicineTime1: '',
      medicineTime2: '',
      medicineTime3: 'After Dinner',
    },

    {
      id: '0',
      title: 'Famsiklovir',
      imageData:
        'https://www.medinepal.com/storage/product/400/xcixCbBtFsT4JgxTAOoOSJq7zbKUDeICDchIJYTK.jpg',
      medicineTime1: ' After Breakfast',
      medicineTime2: '',
      medicineTime3: '',
    },
    {
      id: '1',
      title: 'Paracetamol XL3',
      imageData:
        'https://i.pinimg.com/originals/bf/12/c0/bf12c05be7f73150f05115653979c510.png',
      medicineTime1: 'Before Breakfast',
      medicineTime2: '',
      medicineTime3: 'After Dinner',
    },
    {
      id: '2',
      title: 'Famsiklovir',
      imageData:
        'https://www.medinepal.com/storage/product/400/xcixCbBtFsT4JgxTAOoOSJq7zbKUDeICDchIJYTK.jpg',
      medicineTime1: ' After Breakfast',
      medicineTime2: '',
      medicineTime3: '',
    },
    {
      id: '10',
      title: 'Budesonid-XA',
      imageData:
        'https://thumbs.dreamstime.com/b/medicine-set-plastic-tube-bottle-blister-pack-pills-capsules-drug-medication-collection-cartoon-realistic-flat-illustration-168220145.jpg',
      medicineTime1: '',
      medicineTime2: '',
      medicineTime3: 'After Dinner',
    },
    {
      id: '11',
      title: 'Budesonid',
      imageData:
        'https://thumbs.dreamstime.com/b/medicine-set-plastic-tube-bottle-blister-pack-pills-capsules-drug-medication-collection-cartoon-realistic-flat-illustration-168220145.jpg',
      medicineTime1: '',
      medicineTime2: '',
      medicineTime3: 'After Dinner',
    },
  ];

  const medicineData3 = [
    {
      id: '7',
      title: 'Somon kalsitonin',
      imageData:
        'https://thumbs.dreamstime.com/b/medicine-syringe-icon-cartoon-illustration-medicine-syringe-vector-icon-web-medicine-syringe-icon-cartoon-style-111519638.jpg',
      medicineTime1: 'Before Breakfast',
      medicineTime2: '',
      medicineTime3: '',
    },
    {
      id: '2',
      title: 'Famsiklovir',
      imageData:
        'https://www.medinepal.com/storage/product/400/xcixCbBtFsT4JgxTAOoOSJq7zbKUDeICDchIJYTK.jpg',
      medicineTime1: ' After Breakfast',
      medicineTime2: '',
      medicineTime3: '',
    },
    {
      id: '3',
      title: 'florometalon asetat',
      imageData:
        'https://us.123rf.com/450wm/keltmd/keltmd2003/keltmd200300139/142946603-bottle-of-medicine-flat-icon-vector-bottle-of-medicine-in-flat-style-isolated-on-white-background-el.jpg?ver=6',
      medicineTime1: '',
      medicineTime2: 'After Lunch',
      medicineTime3: '',
    },
    {
      id: '4',
      title: 'erenumab',
      imageData:
        'https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-medicine-pill-icon-in-cartoon-style-png-image_1800901.jpg',
      medicineTime1: '',
      medicineTime2: 'Before Lunch',
      medicineTime3: 'Before Dinner',
    },
    {
      id: '8',
      title: 'Budesonid-2X',
      imageData:
        'https://thumbs.dreamstime.com/b/medicine-set-plastic-tube-bottle-blister-pack-pills-capsules-drug-medication-collection-cartoon-realistic-flat-illustration-168220145.jpg',
      medicineTime1: '',
      medicineTime2: '',
      medicineTime3: 'After Dinner',
    },
    {
      id: '9',
      title: 'Budesonid-X1',
      imageData:
        'https://thumbs.dreamstime.com/b/medicine-set-plastic-tube-bottle-blister-pack-pills-capsules-drug-medication-collection-cartoon-realistic-flat-illustration-168220145.jpg',
      medicineTime1: '',
      medicineTime2: '',
      medicineTime3: 'After Dinner',
    },

    {
      id: '5',
      title: 'brinzolamid',
      imageData:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvIhqaH2kA6t-Iwyv-6N1WDOo5oKrwEVkyw&usqp=CAU',
      medicineTime1: '',
      medicineTime2: '',
      medicineTime3: 'Before Slept',
    },
    {
      id: '6',
      title: 'ofatumumab',
      imageData:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_w_HtuglFnnhxLC8Zf5a_XjNxIFEU87ygA&usqp=CAU',
      medicineTime1: 'After Breakfast',
      medicineTime2: '',
      medicineTime3: 'AfterDinner',
    },
  ];

  const renderMedicineItem = ({item}) => {
    return (
      <Box
        height={70}
        as={Button}
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: item.isActive ? '#00E400' : 'white',
        }}
        marginBottom={3}
        borderRadius={20}
        justifyContent="space-between"
        flexDirection="row"
        onLongPress={() => {
          alert('You took your medicine');

          updateTodaysCard(item.medicineId);
        }}>
        <Box justifyContent="center" marginLeft={3}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: item.medicineImage}}
          />
        </Box>

        <Box justifyContent="space-between" alignItems="center">
          <Box marginTop={2}>
            <Text fontFamily="Futura-Bold" fontSize={16}>
              {item.medicineName}
            </Text>
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-evenly"
            marginBottom={2}>
            {item.medicineTime[0] ? (
              <Box
                bg="#509ed8"
                width={110}
                alignItems="center"
                borderRadius={4}>
                <Text fontFamily="Futura-Medium" fontSize={12} color="white">
                  {item.medicineTime[0]?.item}
                </Text>
              </Box>
            ) : null}

            {item.medicineTime[1] ? (
              <Box
                width={110}
                alignItems="center"
                bg="#cc0080"
                marginLeft={3}
                borderRadius={4}>
                <Text fontFamily="Futura-Medium" fontSize={12} color="white">
                  {item.medicineTime[1].item}
                </Text>
              </Box>
            ) : null}
          </Box>
          {item.medicineTime[2] ? (
            <Box
              width={110}
              alignItems="center"
              bg="#2faf49"
              marginLeft={3}
              borderRadius={4}>
              <Text fontFamily="Futura-Medium" fontSize={12} color="white">
                {item.medicineTime[2].item}
              </Text>
            </Box>
          ) : null}
        </Box>

        <Box>
          <Text color="white">.</Text>
        </Box>
      </Box>
    );
  };

  // new render days item for stats
  const renderDaysItem = ({item, index}) => {
    return (
      <Button justifyContent="space-between" alignItems="center">
        <Box justifyContent="space-between" alignItems="center">
          <Text fontFamily="Futura-Medium" marginTop={10}>
            {Moment(Date.now() - (6 - index) * 24 * 3600 * 1000).format('ddd')}
          </Text>
          <Box style={{marginTop: -5}} padding={15}>
            <CircularProgress
              showProgressValue={false}
              radius={22}
              value={item}
              activeStrokeColor={
                item >= 80
                  ? '#80cc00'
                  : item >= 50 && item < 80
                  ? '#fab666'
                  : '#bb1c2a'
              }
              inActiveStrokeColor={'#B4C7BF'}
              inActiveStrokeOpacity={0.2}
              activeStrokeWidth={3}
              inActiveStrokeWidth={3}
            />
            <Text style={{marginTop: -32, marginLeft: 15}}>
              {Moment(Date.now() - (6 - index) * 24 * 3600 * 1000).format('D')}
            </Text>
          </Box>
        </Box>
      </Button>
    );
  };

  useEffect(() => {
    newPushDetector(); // notify pop up göstermek için gerekli infoyu sağlar
    newPushFinder(); // total notify sayısını bulan fonk

    // pop - up göstermek için gerekli useffect
    if (newPush != 0 && newPushInfo.Name) {
      showLocalPush();
    }
  }, [newPush]);

  /////// yeni bildirim sayısını arayan fonks
  function newPushFinder() {
    firestore()
      .collection('notifications')
      .doc(myEmail)
      .onSnapshot(snapshot => {
        setnewPush(snapshot.data()?.boolNotify);
      });
  }

  //en son gelen bildirimi yakalayan fonksiyon
  async function newPushDetector() {
    await firestore()
      .collection('notifications')
      .doc(myEmail)
      .collection('userNotifications')
      .orderBy('createdDate', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.forEach(snap => {
          setnewPushInfo(snap.data());
        });
      });
  }

  const updateTodayCount = async () => {
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
          todaysSelelected: firebase.firestore.FieldValue.increment(1),
        },
        {merge: true},
      );

    getTodayStatisticsNum();
  };

  const updateTodaysCard = async docId => {
    await firestore()
      .collection('users')
      .doc(myEmail)
      .collection('medicineData')
      .doc(docId)
      .set(
        {
          isActive: true,
        },
        {merge: true},
      );

    updateTodayCount();
  };
  const setPercentageFirebase = async percentageNum => {
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
          percentage: percentageNum,
        },
        {merge: true},
      );
  };

  // istatistik bilgisini almak için
  const getTodayStatisticsNum = async () => {
    let monthId = (new Date().getMonth() + 1).toString();
    let dayId = new Date().getDate().toString();

    await firestore()
      .collection('users')
      .doc(myEmail)
      .collection('medicineStatistic')
      .doc(monthId)
      .collection('days')
      .doc(dayId)
      .onSnapshot(querySnapshot => {
        const percentageNum =
          querySnapshot.data().todaysSelelected /
          querySnapshot.data().totalMedicine;

        //setPercentageStats(percentageNum);
        setPercentageFirebase(percentageNum);
      });
  };

  // haftalık istatistikleri almak için
  const getWeeklyStatistics = async () => {
    let monthId = (new Date().getMonth() + 1).toString();

    firestore()
      .collection('users')
      .doc(myEmail)
      .collection('medicineStatistic')
      .doc(monthId)
      .collection('days')
      .limit(7)
      .onSnapshot(querySnapshot => {
        const weeklyData = querySnapshot.docs.map(doc =>
          Math.trunc(doc.data().percentage * 100),
        );
        setAllPercentage(weeklyData);
      });
  };
  function getAllMedicineToday() {
    firestore()
      .collection('users')
      .doc(myEmail)
      .collection('medicineData')
      .orderBy('medicineId', 'desc')
      .onSnapshot(querySnapshot => {
        const alldatas = querySnapshot.docs.map(doc => doc.data());
        setallMedicineToday(alldatas);
      });
  }

  useEffect(() => {
    getAllMedicineToday();
    getTodayStatisticsNum();
    getWeeklyStatistics();
  }, []);

  //// RenderCustom Pop Up
  const renderCustomPopup = ({
    // popup özelleştir
    appIconSource,
    timeText,
    body,
  }) => (
    <Box
      style={{
        marginTop: 10,
        backgroundColor: 'white', // TEMP
        borderRadius: 12,
        minHeight: 86,
        // === Shadows ===
        // Android
        elevation: 5,
        // iOS
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 1,
          width: 0,
        },
      }}>
      <Box
        style={{
          height: 36,
          backgroundColor: 'white', // TEMP
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          paddingVertical: 6,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Box
          style={{
            height: 20,
            width: 20,
            marginLeft: 12,
            marginRight: 8,
            borderRadius: 4,
          }}>
          <Image
            style={{
              marginTop: -15,
              height: 50,
              width: 50,
              resizeMode: 'contain',
              tintColor: 'black',
            }}
            source={appIconSource || null}
          />
        </Box>

        <Box style={{marginHorizontal: 16}}>
          <Text
            style={{fontSize: 12, color: 'black', lineHeight: 14}}
            numberOfLines={1}>
            {timeText || ''}
          </Text>
        </Box>
      </Box>
      <Box
        style={{
          width: '100%',
          paddingTop: 8,
          paddingBottom: 10,
          paddingHorizontal: 16,
        }}>
        <Box>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 18,
              color: 'black',
              marginTop: 5,
            }}>
            {body || ''}
          </Text>
        </Box>
      </Box>
    </Box>
  );

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
          <Box>
            <Box flexDirection="row" marginRight={20}>
              <Box
                as={Button}
                bg="red"
                borderRadius={20}
                mr={2}
                width={40}
                height={40}
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                onPress={() => {
                  navigation.navigate('NotificationPage');
                }}>
                <Push width={40} height={40} />
                <Box
                  bg="white"
                  width={18}
                  height={18}
                  borderRadius={8}
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  style={{right: 2, bottom: 0}}>
                  <Text
                    color="red"
                    style={{fontSize: 13, fontFamily: 'Futura-Bold'}}>
                    1
                  </Text>
                </Box>
              </Box>
              <Box
                as={Button}
                bg="red"
                borderRadius={20}
                width={40}
                height={40}
                mr={2}
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                onPress={() => {
                  navigation.navigate('search');
                }}>
                <Search width={40} height={40} />
              </Box>
              <Box
                as={Button}
                bg="red"
                borderRadius={20}
                width={40}
                height={40}
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                onPress={() => {
                  signout();
                }}>
                <Text fontSize={24} color="white">
                  X
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Günler ve ilaç miktarları */}
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
          <Text fontFamily="Futura-Medium" fontSize={30}>
            Today, {Moment(new Date()).format('D MMM')}
          </Text>
          <Box
            bg="red"
            as={Button}
            borderRadius={15}
            mr={2}
            justifyContent="center"
            onPress={() => {
              this.popup.show({
                onPress: function () {
                  console.log('Pressed');
                },
                appIconSource: require('../components/icons/Picture'),
                appTitle: 'Medcare',
                timeText: 'Now',
                title: 'Medcare',
                body: 'Test message.\nTesting emoji 😀',
                slideOutTime: 5000,
              });
            }}>
            <Text color="white" p={2}>
              Show notification
            </Text>
          </Box>
        </Box>
        <FlatList
          data={allPercentage}
          renderItem={renderDaysItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Box
          flexDirection="row"
          justifyContent="space-evenly"
          marginTop={15}
          marginBottom={10}>
          <Box>
            <Box
              as={Button}
              onPress={() => {
                setFocus('today');
              }}>
              <Text
                color="black"
                fontFamily="Futura-Bold"
                opacity={isFocus === 'today' ? 1 : 0.6}
                fontSize={16}>
                Today
              </Text>
            </Box>

            <Box
              borderBottomColor="black"
              borderBottomWidth={2}
              opacity={isFocus === 'today' ? 1 : 0}
            />
          </Box>

          <Box>
            <Box
              as={Button}
              onPress={() => {
                setFocus('week');
              }}>
              <Text
                color="black"
                fontFamily="Futura-Bold"
                fontSize={16}
                opacity={isFocus === 'week' ? 1 : 0.6}>
                Week
              </Text>
            </Box>

            <Box
              borderBottomColor="black"
              borderBottomWidth={2}
              opacity={isFocus === 'week' ? 1 : 0}
            />
          </Box>

          <Box>
            <Box
              as={Button}
              onPress={() => {
                setFocus('month');
              }}>
              <Text
                color="black"
                fontFamily="Futura-Bold"
                fontSize={16}
                opacity={isFocus === 'month' ? 1 : 0.6}>
                Month
              </Text>
            </Box>

            <Box
              borderBottomColor="black"
              borderBottomWidth={2}
              opacity={isFocus === 'month' ? 1 : 0}
            />
          </Box>
        </Box>
      </Box>

      {/* İlaçlar */}

      <Box
        marginTop={3}
        mx={20}
        mb={200}
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
        {isFocus === 'today' ? (
          <FlatList
            data={allMedicineToday}
            renderItem={renderMedicineItem}
            keyExtractor={item => item.medicineId}
            showsVerticalScrollIndicator={false}
          />
        ) : isFocus === 'week' ? (
          <FlatList
            data={medicineData2}
            renderItem={renderMedicineItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        ) : isFocus === 'month' ? (
          <FlatList
            data={medicineData3}
            renderItem={renderMedicineItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        ) : null}
      </Box>

      <Box
        as={Button}
        position="absolute"
        style={{bottom: Platform.OS === 'ios' ? 10 : 35, right: 30}}
        width={60}
        height={60}
        borderRadius={35}
        bg="red"
        justifyContent="center"
        alignItems="center"
        onPress={() => {
          navigation.navigate('AddPillsPage');
        }}>
        <Text color="white" fontSize={40} mb={1}>
          +
        </Text>
      </Box>
      <NotificationPopup
        ref={ref => (popup = ref)}
        shouldChildHandleResponderStart={true}
        shouldChildHandleResponderMove={true}
        renderPopupContent={renderCustomPopup}
      />
    </Box>
  );
};

export default Home;
