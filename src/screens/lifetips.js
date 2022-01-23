import React from 'react';
import {FlatList, Image, Platform, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native';

import Box from '../components/box';
import Button from '../components/button';
import Text from '../components/text';

const DATA = [
  {
    id: 1,
    title: 'Bol bol yürüyüş yapın',
    imgUrl:
      'https://www.365gun.com/sites/g/files/vrxlpx32371/files/styles/desktop_1000xauto/public/2021-03/onedio-icerik-bir.jpeg?itok=wz6L_Qng',
    description:
      'Hava şartları izin verdiği sürece açık hava yürüyüşleri yapın. Tabi güneş ışınlarından korunmayı ihmal etmeyerek. Gün içinde en yarım saat tempolu yürüyüş yaparak hem fiziksel he de ruhsal olarak rahatlayabilirsiniz. Hava şartları izin verdiği sürece açık hava yürüyüşleri yapın. Tabi güneş ışınlarından korunmayı ihmal etmeyerek. Gün içinde en yarım saat tempolu yürüyüş yaparak hem fiziksel he de ruhsal olarak rahatlayabilirsiniz. Hava şartları izin verdiği sürece açık hava yürüyüşleri yapın. Tabi güneş ışınlarından korunmayı ihmal etmeyerek. Gün içinde en yarım saat tempolu yürüyüş yaparak hem fiziksel he de ruhsal olarak rahatlayabilirsiniz.Hava şartları izin verdiği sürece açık hava yürüyüşleri yapın.',
  },
  {
    id: 2,
    title: 'Kahve yerine bitki çayı tercih edin',
    imgUrl:
      'https://www.365gun.com/sites/g/files/vrxlpx32371/files/styles/desktop_1000xauto/public/2021-03/onedio-icerik-2.jpeg?itok=vQki9Ijw',
    description:
      'Kahvenin fazlası sağlık için yararlı değildir. Gün içinde pek çok sayıda kahve tüketiyorsanız 2 fincanı bitki çayıyla değiştirebilirsiniz. Meyve ve sebzeler önemli oranda antioksidan içerir. Antioksidanlar yaşlanmayı hızlandıran serbest radikalleri etkisiz hale getirir.',
  },
  {
    id: 3,
    title: 'Kahvaltınızı eksik etmeyin',
    imgUrl:
      'https://www.365gun.com/sites/g/files/vrxlpx32371/files/styles/desktop_1000xauto/public/2021-03/kahvalti.jpeg?itok=3yoArC1v',
    description:
      'Kahvaltı günün en uzun açlığı olan gece açlığını takip ettiği için biten enerjinin tekrar alınabilmesi için önemlidir. Ayrıca güzel bir kahvaltı güne mutlu bir şekilde başlamanızı sağlar. Uyku sonrasında vücudu ve beyni tekrar harekete geçirmek, metabolizmanızı hızlandırmak ve enerji kazanmak için kahvaltınızı eksik etmeyin.',
  },
  {
    id: 4,
    title: 'Zeytinyağı tüketin',
    imgUrl:
      'https://www.365gun.com/sites/g/files/vrxlpx32371/files/styles/desktop_1000xauto/public/2021-03/onedio-icerik-3.jpeg?itok=-J9ZLclQ',
    description:
      'Zeytinyağının faydaları saymakla bitmiyor. Ömrü uzatıyor, kalp damar hastalıklarına iyi geliyor, doğal bir anti-aging etkisi yapıyor.',
  },
  {
    id: 5,
    title: 'Hayatınızdan kahkahayı eksik etmeyin',
    imgUrl:
      'https://www.365gun.com/sites/g/files/vrxlpx32371/files/styles/desktop_1000xauto/public/2021-03/onedio-icerik-4.jpeg?itok=ViiLHZhZ',
    description:
      'Her şeyi gereğinden fazla ciddiye alarak kendinize gereksiz dertler yüklemeyin. Bu sizi yıpratacak hatta yaşlandıracaktır',
  },
];

const LifeTips = ({navigation}) => {
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
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Box
            as={Button}
            flexDirection="row"
            ml={10}
            backgroundColor="#fafafa"
            borderRadius={15}
            mb={2}
            onPress={() => {
              navigation.navigate('readDetailstPage', {
                textImage: item.imgUrl,
                textTitle: item.title,
                textDescription: item.description,
              });
            }}>
            <Box borderRadius={10} mt={2} ml={2} mb={2}>
              <Image
                style={{width: 120, height: 120, borderRadius: 10}}
                source={{uri: item.imgUrl}}
              />
            </Box>
            <Box mt={2} ml={10}>
              <Box style={{marginRight: 150}}>
                <Text fontSize={15} fontWeight="bold">
                  {item.title}
                </Text>
                <Text numberOfLines={5} width={150}>
                  {item.description}
                </Text>
              </Box>
            </Box>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};
export default LifeTips;
