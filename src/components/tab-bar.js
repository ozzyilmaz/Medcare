import React from 'react';
import Button from '../components/button';

import Box from '../components/box';
import Text from '../components/text';
import {
  Home,
  Flame,
  Flash,
  Redo,
  HomeRed,
  FlameRed,
  FlashRed,
  QuoteRed,
} from '../components/icons';

function TabBar({state, descriptors, navigation}) {
  return (
    <Box
      pb={5}
      bg="white"
      flexDirection="row"
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 24,
        position: 'absolute',
        bottom: 0,
        elevation: 15,
        width: '100%',
        height: 75,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <Button
            key={label}
            mt={16}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height={40}
            flex={1}
            onPress={onPress}>
            {label === 'Home' && (
              <Box alignItems="center">
                {isFocused ? <HomeRed color="black" /> : <Home color="black" />}
                <Text fontFamily="Futura Medium" pt={0.9}>
                  Home
                </Text>
              </Box>
            )}
            {label === 'Addict' && (
              <Box alignItems="center">
                {isFocused ? (
                  <FlameRed color="black" />
                ) : (
                  <Flame color="black" />
                )}
                <Text fontFamily="Futura Medium" pt={0.9}>
                  Addict
                </Text>
              </Box>
            )}
            {label === 'LifeTips' && (
              <Box alignItems="center">
                {isFocused ? (
                  <FlashRed color="black" />
                ) : (
                  <Flash color="black" />
                )}
                <Text fontFamily="Futura Medium" pt={0.9}>
                  Life Tips
                </Text>
              </Box>
            )}
            {label === 'Recommends' && (
              <Box alignItems="center">
                {isFocused ? (
                  <QuoteRed color="black" />
                ) : (
                  <Redo color="black" />
                )}
                <Text fontFamily="Futura Medium" pt={0.9}>
                  Health
                </Text>
              </Box>
            )}
          </Button>
        );
      })}
    </Box>
  );
}

export default TabBar;
