import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/routes/app-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from './src/components/CustomSidebarMenu';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            header: () => null,
            swipeEnabled: false,
          }}
          drawerContent={props => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen name="Test" component={AppNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
