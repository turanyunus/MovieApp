import React, {useEffect, useState} from 'react';

/*ALL SCREEN*/
import SplashScreen from './src/components/splash-screen';
import HomePage from './src/screens/HomePage';
import DrawerContent from './src/components/drawer-content';
import EntryPage from './src/screens/EntryPage';
import LogInPage from './src/screens/LogInPage';

/*REACT_NAVIGATION*/
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import SignInPage from './src/screens/SignInPage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const navigationHandler = () => ({
  headerShown: false,
});

const DrawNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="back"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomePage" component={HomePage} />
    </Drawer.Navigator>
  );
};

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
