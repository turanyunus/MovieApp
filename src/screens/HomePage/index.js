import React from 'react';
import {View, Text} from 'react-native';
import HeaderComponent from '../../components/header';

const HomePage = ({navigation}) => {
  return (
    <View>
      <HeaderComponent handleNavigate={navigation} backButton={false} />
      <Text>Home.js</Text>
    </View>
  );
};
export default HomePage;
