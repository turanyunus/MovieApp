import React, {useEffect, useState} from 'react';
import {Icon} from 'native-base';

/*ALL SCREEN*/
import SplashScreen from './src/components/splash-screen';
import HomePage from './src/screens/HomePage';
import DrawerContent from './src/components/drawer-content';
import EntryPage from './src/screens/EntryPage';
import LogInPage from './src/screens/LogInPage';
import SignInPage from './src/screens/SignInPage';
import NewMoviesPage from './src/screens/NewMoviesPage';

/*REACT_NAVIGATION*/
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const navigationHandler = () => ({
  headerShown: false,
});

const DrawNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="back"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomePage" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <MaterialBottomTabs.Navigator
      initialRouteName="HomePage"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'HomePage') {
            iconName = focused ? 'ios-home' : 'home-outline';
          }
          else if (route.name === 'NewMoviesPage') {
            iconName = focused ? 'md-disc-sharp' : 'md-disc-outline';
          }
          return (
            <Icon name={iconName} style={{color: '#fa5656', fontSize: 23}} />
          );
        },
      })}
      barStyle={{backgroundColor: 'white'}}>
      <MaterialBottomTabs.Screen
        name="HomePage"
        options={{title: 'Anasayfa'}}
        children={screenHomeStack}
      />
      <MaterialBottomTabs.Screen
        name="NewMoviesPage"
        options={{title: 'En Yeniler'}}
        children={NewMoviesPage}
      />
    </MaterialBottomTabs.Navigator>
  );
};

const screenHomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomePage"
      options={navigationHandler}
      component={HomePage}
    />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="EntryPage"
      options={navigationHandler}
      component={EntryPage}
    />
    <Stack.Screen
      name="LogInPage"
      options={navigationHandler}
      component={LogInPage}
    />
    <Stack.Screen
      name="SignInPage"
      options={navigationHandler}
      component={SignInPage}
    />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, isSetLogin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <NavigationContainer>
        {isLogin ? <DrawNavigator /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};
export default App;
