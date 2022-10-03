import {useNavigation} from '@react-navigation/native';
import React, {type PropsWithChildren, useEffect} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

export const FeedsScreen: React.FC<PropsWithChildren> = ({navigation}) => {
  useEffect(() => {
    console.log('called');
  }, []);

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={toggleDrawer} style={{flex: 1}}>
        <Text>Feeds Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
