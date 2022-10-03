import React, {type PropsWithChildren} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatsScreen, FeedsScreen} from '../../screens';

const Tab = createMaterialTopTabNavigator();

export const MainScreen: React.FC<PropsWithChildren> = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={route => ({
        tabBarLabelStyle: {fontSize: 12, fontWeight: '600'},
        tabBarStyle: {backgroundColor: '#e1e2ee'},
        tabBarIndicatorStyle: {backgroundColor: '#6440C1'},
      })}>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Find" component={ChatsScreen} />
    </Tab.Navigator>
  );
};
