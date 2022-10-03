import React, {type PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

export const LoginScreen: React.FC<PropsWithChildren> = ({}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
    </View>
  );
};
