import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const HeaderIcon = () => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View>
      <TouchableOpacity onPress={toggleDrawer} style={{flex: 1}}>
        <Image
          style={styles.logoImg}
          source={require('../assets/png/logo-no-background.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoImg: {
    width: 40,
    height: 40,
  },
});

export default HeaderIcon;
