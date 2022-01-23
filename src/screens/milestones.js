import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

import Box from '../components/box';
import Text from '../components/text';

function Milestones() {
  const DATA = [
    {
      time: 'Başlangıç',
      title: 'Bir bırakma planı yapın!',
      description:
        'Bir planının olması sigarayı bıraktığın ilk günü kolaylaştırır. Bırakma planı odaklı, emin ve kararlı olmanın yollarını içerir. Kendi bırakma planını oluşturabilir ya da senin için uygun bir bırakma programı bulabilirsin.',
      lineColor: '#009688',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
    },
    {
      time: '1. Hafta',
      title: 'Ailene ve Arkadaşlarına Sigarayı Bırakmayı Planladığını Anlat',
      description:
        'Hayatındaki kişiler destek verdiğinde sigarayı bırakmak daha kolaydır. Bırakma planlarını onlara anlat ve nasıl yardım edebileceklerini açıkla.',
      lineColor: '#009688',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
    },
    {
      time: '2. Hafta',
      title: 'Egzersiz Yapın!',
      description:
        'Egzersiz yapmak hem sizi daha dinç tutacak hem de spor disiplini sizin otokontrolünüzü arttıracak ve kafanızın dağılmasına, sigarayı düşünmemenize sebep olacak.',
      lineColor: '#009688',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
    },
    {
      time: '3. Hafta',
      title: 'Doktor Muayenesi',
      description:
        'Sigara bırakmaya başlanacak süreçte bir uzmandan yardım almak şart diyebiliriz. Bu süreçte neler yapmalıyız tümünü doktorumuzdan öğrenebiliriz.',
      lineColor: '#009688',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
    },
    {
      time: '3. Hafta',
      title: 'Sigara Tetikleyicilerden Uzak Dur!',
      description:
        'Tetikleyiciler sigara içme dürtünüzü meydana çıkaran kişiler, şeyler ve durumlardır. Bıraktığın gün bütün tetikleyicilerden uzak durmaya çalış. ',
      lineColor: '#009688',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
    },
    {
      time: 'Sigarasız 2. Gün',
      title: 'Tat ve Koku',
      description: '2. gün sonunda tat ve koku duyularınız keskinleşir.',
      lineColor: '#009688',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg',
    },
    {
      time: '4. Hafta',
      title: 'İlaç Tedavisi',
      lineColor: '#009688',
      description:
        'Doktorumuzun bize önerdiği ilaçları minimum 4 hafta olmak üzere kullan- maya devam etmeliyiz.',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg',
    },

    {
      time: '5. Hafta',
      title: 'Yoksunluk ile Başa Çıkacak Yollar Bul',
      description:
        'Bıraktıktan sonraki ilk birkaç hafta boyunca kendini rahatsız hissedebilir ve şiddetle sigara isteyebilirsin. Bunun nedeni yoksunluktur. Yoksunluk sırasında bedenin nikotinsizliğe alışmaktadır.',
      lineColor: '#009688',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg',
    },
    {
      time: '6. Hafta',
      title: 'Tebrikler!',
      lineColor: '#009688',
      description:
        'Tebriklerrr :) sigarayı bıraktın, işte sigarayı bırakmak bu kadar kolay. Sadece irade ve sana yardımcı olacak şeylere ihtiyacın var.',
      imageUrl:
        'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg',
    },
  ];
  const [selected, setSelected] = useState();

  function renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      );

    return (
      <View style={{flex: 1}}>
        {title}
        {desc}
      </View>
    );
  }

  function onEventPress(data) {
    setSelected(data);
  }

  function renderSelected() {
    if (selected)
      return (
        <Box justifyContent="center" alignItems="center">
          <Text
            style={{
              marginTop: 10,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Selected Event
          </Text>
          <Box
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 2,
              width: 100,
            }}
          />
          <Text
            style={{
              marginTop: 10,
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {selected.title} at {selected.time}
          </Text>
        </Box>
      );
  }
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
              Milestones
            </Text>
          </Box>
        </Box>
      </Box>
      <Box flex={1} bg="white">
        <Box
          bg="#FF5959"
          py={3}
          mt={2}
          pt={2}
          marginHorizontal={10}
          borderRadius={10}
          alignItems="center">
          {renderSelected()}
        </Box>
        <Timeline
          data={DATA}
          innerCircle={'dot'}
          renderDetail={renderDetail}
          style={styles.list}
          circleSize={25}
          dotSize={12}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{minWidth: 52, marginTop: 10}}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#676FA3',
            color: 'white',
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{color: 'gray'}}
          options={{
            style: {paddingTop: 5},
          }}
          onEventPress={onEventPress}
          detailContainerStyle={{
            marginBottom: 20,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: '#CDDEFF',
            borderRadius: 10,
          }}
          columnFormat="two-column"
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textDescription: {
    color: 'gray',
    marginTop: 10,
  },
});

export default Milestones;
