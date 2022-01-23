import React from 'react';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';
import Box from '../components/box';
import {NotificationsCard} from '../components/card';
import Text from '../components/text';

const DATA = [
  {
    id: 1,
    title: 'Takviye Vitaminler',
    descriptions:
      'Bugün vitaminlerinizi almayı unuttunuz.Vitaminlerinizi düzenli kullanırsanız daha dinç bir gün geçirirsiniz',
    imgUrl:
      'https://i.pinimg.com/originals/bf/12/c0/bf12c05be7f73150f05115653979c510.png',
    value: 60,
  },
  {
    id: 2,
    title: 'Sağlıklı Adımlar',
    descriptions:
      'Bugün yürüyüş hedefinizi yerine getirmediniz.Biraz daha yürüyebilirsiniz',
    imgUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/000/352/807/small/Health__2861_29.jpg',
    value: '45',
  },
  {
    id: 3,
    title: 'Uzun Yaşam İyi Egzersiz',
    descriptions:
      'Bugün egzersizini yapmadınız.Lütfen kendi sağlığınız için egzersizinizi yapınız.',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVTAlAQK3EhZM613PDbSO9L6I2n_Fxzeh4g&usqp=CAU',
    value: 5,
  },
  {
    id: 4,
    title: 'Verimli Gün İyi Uykudan Geçer',
    descriptions: 'Bugün tam olarak 8 saat 3 dakika uyudunuz.Tebrikler',
    imgUrl:
      'https://thumbs.dreamstime.com/b/sleep-control-concept-vector-background-isolated-white-young-woman-sleeping-home-bed-smart-watch-her-hand-view-172884054.jpg',
    value: 99,
  },
  {
    id: 5,
    title: 'Panik Atak',
    descriptions:
      'Bugünki stres seviyeniz çok düşük.Panik Atak geçirme olasılığınız az',
    imgUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/000/689/067/small/woman-with-headache.jpg',
    value: 25,
  },
];

const renderData = ({item}) => {
  return (
    <NotificationsCard descriptions={item.descriptions} imgUrl={item.imgUrl} />
  );
};

const Notifications = ({}) => {
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
      <Box marginTop={3} mx={2}>
        <FlatList
          data={DATA}
          renderItem={renderData}
          keyExtractor={item => item.id}
        />
      </Box>
    </Box>
  );
};

export default Notifications;
