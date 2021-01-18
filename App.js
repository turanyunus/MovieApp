import React, {useEffect, useState} from 'react';
import SplashScreen from './src/components/splash-screen';
import HomePage from './src/screens/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContent from './src/components/drawer-content';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="back"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomePage" component={HomePage} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        <DrawNavigator />
      </NavigationContainer>
    </>
  );
};
export default App;
