import React from 'react';
import {View, Text} from 'react-native';
import HeaderComponent from '../../components/header';

const LogInPage = ({navigation}) => {
  return (
    <View>
      <HeaderComponent handleNavigate={navigation} backButton={true} />
      <Text>LogInPage.js</Text>
    </View>
  );
};
export default LogInPage;
