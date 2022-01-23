import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from '../components/tab-bar';

import Home from '../screens/home';
import Addict from '../screens/addict';
import LifeTips from '../screens/lifetips';
import Recommends from '../screens/recommends';
import AddPills from '../screens/addpills';
import Notifications from '../screens/notifications';
import readDetailst from '../screens/readDetailst';
import Milestones from '../screens/milestones';
import Doit from '../screens/doit';
import Search from '../screens/search';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Addict"
        component={Addict}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="LifeTips"
        component={LifeTips}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Recommends"
        component={Recommends}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomePage" component={tabNavigator} />
      <Stack.Screen name="AddPillsPage" component={AddPills} />
      <Stack.Screen name="NotificationPage" component={Notifications} />
      <Stack.Screen name="readDetailstPage" component={readDetailst} />
      <Stack.Screen name="milestones" component={Milestones} />
      <Stack.Screen name="doit" component={Doit} />
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
};
export default HomeStack;
