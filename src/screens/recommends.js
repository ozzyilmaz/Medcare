import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  CheckBox,
  KeyboardAvoidingView,
} from 'react-native';
import Box from '../components/box';
import Input from '../components/input';

import Button from '../components/button';
import {RecommedsCard} from '../components/card';
import Text from '../components/text';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import firestore, {firebase} from '@react-native-firebase/firestore';

import Moment from 'moment';

const Recommends = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [faceCount, setFaceCount] = useState(0);
  const [checkboxStateV, setCheckboxStateV] = useState(false);
  const [steps, setSteps] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [allData, setAllData] = useState([]);

  const DATA = [
    {
      id: 1,
      title: 'Takviye Vitaminler',
      descriptions: allData.checkboxStateV
        ? 'Vitaminlerinizi aldınız 🤗'
        : 'Bugün vitaminlerinizi almayı unuttunuz.Vitaminlerinizi düzenli kullanırsanız daha dinç bir gün geçirirsiniz 😥',
      imgUrl:
        'https://i.pinimg.com/originals/bf/12/c0/bf12c05be7f73150f05115653979c510.png',
      value: allData.checkboxStateV ? 100 : 0,
    },
    {
      id: 2,
      title: 'Sağlıklı Adımlar',
      descriptions:
        allData.steps >= 10000
          ? 'Günün yürüyüş hedefine ulaştınız. 🥳'
          : 'Bugün yürüyüş hedefinizi yerine getirmediniz. Biraz daha yürüyebilirsiniz 🏃🏻',
      imgUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/000/352/807/small/Health__2861_29.jpg',
      value:
        allData.steps >= 10000
          ? 100
          : allData.steps < 10000 && allData.steps >= 5000
          ? 50
          : 0,
    },
    {
      id: 3,
      title: 'Uzun Yaşam İyi Egzersiz',
      descriptions:
        allData.starCount * 20 == 0
          ? 'Bugün egzersizini yapmadınız. Lütfen kendi sağlığınız için egzersizinizi yapınız. ⛹🏼‍♀️'
          : allData.starCount * 20 <= 60
          ? 'Bugün yeterince egzersiz yapmadınız. Lütfen egzersizlerinizi tamamlayın 🏄🏻‍♀️'
          : 'Günün egzersiz rutinini büyük oranda tamamladınız 🎖',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVTAlAQK3EhZM613PDbSO9L6I2n_Fxzeh4g&usqp=CAU',
      value: allData.starCount * 20,
    },
    {
      id: 4,
      title: 'Verimli Gün İyi Uykudan Geçer',
      descriptions:
        allData.sleep >= 7
          ? 'Bugün tam verimde uyudunuz.Tebrikler 😎'
          : 'Sağlıklı bir yaşam için en az 7 saat uyumalısınız 🥱',
      imgUrl:
        'https://thumbs.dreamstime.com/b/sleep-control-concept-vector-background-isolated-white-young-woman-sleeping-home-bed-smart-watch-her-hand-view-172884054.jpg',
      value:
        allData.sleep >= 7
          ? 100
          : allData.sleep < 7 && allData.sleep >= 4
          ? 50
          : 0,
    },
    {
      id: 5,
      title: 'Panik Atak',
      descriptions:
        allData.faceCount * 20 >= 70
          ? 'Bugünkü stres seviyeniz çok düşük. Panik Atak geçirme olasılığınız az 😵'
          : 'Çok fazla stres sağlınız açısından oldukça tehlikeli',
      imgUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/000/689/067/small/woman-with-headache.jpg',
      value: allData.faceCount * 20,
    },
  ];

  const myEmail = firebase.auth()?.currentUser?.email;

  const renderData = ({item}) => {
    return (
      <RecommedsCard
        title={item.title}
        descriptions={item.descriptions}
        imgUrl={item.imgUrl}
        value={item.value}
      />
    );
  };

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    await firestore()
      .collection('users')
      .doc(myEmail)
      .collection('healthData')
      .doc('health')
      .get()
      .then(snapshot => {
        setAllData(snapshot.data());
      });
  };

  const saveAllData = async (
    isModalVisible,
    starCount,
    faceCount,
    checkboxStateV,
    steps,
    sleep,
  ) => {
    await firestore()
      .collection('users')
      .doc(myEmail)
      .collection('healthData')
      .doc('health')
      .set(
        {
          isModalVisible: isModalVisible,
          starCount: starCount,
          faceCount: faceCount,
          checkboxStateV: checkboxStateV,
          steps: steps,
          sleep: sleep,
          lastEdit: firebase.firestore.FieldValue.serverTimestamp(),
        },
        {merge: true},
      );
    getAllData();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
      <Box
        mt={2}
        bg="red"
        mx={5}
        justifyContent="center"
        alignItems="center"
        borderRadius={15}>
        <Text color="white">
          You last updated on
          {' ' + Moment(allData.lastEdit).format('D MMM')}
        </Text>
      </Box>
      <Box marginTop={2}>
        <FlatList
          data={DATA}
          renderItem={renderData}
          keyExtractor={item => item.id}
        />
        <Box
          bg={'green'}
          as={Button}
          mx={3}
          borderRadius={15}
          width={100}
          height={40}
          alignSelf="center"
          alignItems="center"
          onPress={() => {
            toggleModal();
          }}>
          <Text color="white" fontSize={28} fontFamily="Futura-Medium">
            Edit
          </Text>
        </Box>
      </Box>
      {/* Modal */}
      <Box>
        <Modal
          isVisible={isModalVisible}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          position="absolute">
          <Box style={{flex: 1}} justifyContent="center">
            <Box bg="white" borderRadius={15} style={{flex: 3 / 4}}>
              {/* X */}
              <Box alignSelf="flex-end" mt={3} mx={15}>
                <Button bg="white" onPress={toggleModal}>
                  <Text fontSize={20}>x</Text>
                </Button>
              </Box>

              <Box alignItems="center" mt={4}>
                <Text fontSize={18} color="black">
                  Please enter your health information
                </Text>
              </Box>
              {/* Bilgileri girme */}
              <Box mt={3}>
                <Box mx={5} mt={2}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="red"
                    unfillColor="#FFFFFF"
                    text="Did you take your vitamins?"
                    iconStyle={{borderColor: 'red'}}
                    textStyle={{fontFamily: 'JosefinSans-Regular'}}
                    onPress={() => setCheckboxStateV(true)}
                  />
                </Box>
                <Box mt={4}>
                  <Input
                    ml={40}
                    pl={20}
                    mt={1}
                    width="78%"
                    height={50}
                    borderWidth={1}
                    borderColor="black"
                    borderRadius={10}
                    placeholder="How many steps did you take today?"
                    onChangeText={newText =>
                      !isNaN(+newText)
                        ? setSteps(Math.round(newText))
                        : alert('Lütfen bir sayı gir')
                    }
                    defaultValue={steps}
                  />
                </Box>
                <Box mt={3}>
                  <Input
                    ml={40}
                    pl={20}
                    mt={1}
                    width="78%"
                    height={50}
                    borderWidth={1}
                    borderColor="black"
                    borderRadius={10}
                    placeholder="How many hours did you sleep today?"
                    onChangeText={newText =>
                      !isNaN(+newText)
                        ? setSleep(Math.round(newText))
                        : alert('Lütfen bir sayı gir')
                    }
                    defaultValue={sleep}
                  />
                </Box>
                <Box
                  bg="#E3E8F0"
                  mx={5}
                  mt={4}
                  alignSelf="center"
                  px={3}
                  py={2}
                  borderRadius={15}>
                  <Text fontSize={18}>Star your daily exercise</Text>

                  <StarRating
                    disabled={false}
                    emptyStar={'star-border'}
                    fullStar={'star'}
                    iconSet={'MaterialIcons'}
                    maxStars={5}
                    rating={starCount}
                    selectedStar={rating => setStarCount(rating)}
                    fullStarColor={'green'}
                  />
                </Box>
                <Box mx={5} mt={4} bg="#E3E8F0" px={3} py={2} borderRadius={15}>
                  <Text fontSize={18}>How happy do you feel?</Text>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    emptyStar={'sentiment-very-dissatisfied'}
                    fullStar={'sentiment-satisfied'}
                    iconSet={'MaterialIcons'}
                    rating={faceCount}
                    selectedStar={rating => setFaceCount(rating)}
                    fullStarColor={'green'}
                  />
                </Box>
                <Box alignSelf="center" mt={4} mb={4}>
                  <Button
                    bg="red"
                    onPress={() => {
                      saveAllData(
                        isModalVisible,
                        starCount,
                        faceCount,
                        checkboxStateV,
                        steps,
                        sleep,
                      ),
                        toggleModal();
                    }}
                    borderRadius={15}>
                    <Text color="white" fontSize={17} mx={2} my={2}>
                      Approve
                    </Text>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Recommends;
