import React, {type PropsWithChildren} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const ChatScreen: React.FC<PropsWithChildren> = ({route}): any => {
  return (
    <View style={styles.container}>
      <Text>One Chat Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
