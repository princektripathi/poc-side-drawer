import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens';
import {MainScreen} from '../screens/MainScreen/MainScreen';
import {ChatScreen} from '../screens/ChatScreen/ChatScreen';
import HeaderIcon from '../components/HeaderIcon';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  }, []);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        // Screens for logged in users
        <Stack.Group>
          <Stack.Screen
            name="Main"
            options={navigationProps => ({
              headerTitle: '',
              headerStyle: {backgroundColor: '#6440C1'},
              headerTintColor: '#6400C1',
              headerLeft: props => <HeaderIcon {...navigationProps} />,
            })}
            component={MainScreen}
          />
          <Stack.Screen
            name="Chat"
            options={({route}) => ({
              title: route.params.title,
              headerTitleStyle: {color: 'white', fontSize: 14},
              headerStyle: {backgroundColor: '#6440C1'},
              headerTintColor: '#6400C1',
            })}
            component={ChatScreen}
          />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logoImg: {
    width: 40,
    height: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default AppNavigation;
