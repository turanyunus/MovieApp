import React from 'react';
import {View, StyleSheet, Image, Dimensions, StatusBar} from 'react-native';
import {Button, Text} from 'native-base';

const EntryPage = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151515" barStyle="light-content" />
      <View style={styles.topSide}>
        <Image
          source={require('../../assets/img/splash-logo.png')}
          style={styles.topImage}
        />
        <Text style={styles.footerSideText}>
          Uygulamamıza ücretsiz erişebilirsiniz
        </Text>
      </View>
      <View style={styles.centerSide}>
        <View style={styles.centerButtonSide}>
          <Button
            style={styles.button}
            onPress={() => props.navigation.navigate('SignInPage')}>
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </Button>
          <Button
            style={styles.button}
            onPress={() => props.navigation.navigate('LogInPage')}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </Button>
        </View>
      </View>
      <View style={styles.footerSide}>
        <Text style={styles.footerSideText}>Herşey Movie App ile güzel</Text>
      </View>
    </View>
  );
};
const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3d3d',
    padding: 20,
    display: 'flex',
  },
  topSide: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topImage: {
    height: height * 0.2,
    width: height * 0.2,
  },
  centerSide: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerButtonSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  buttonText: {
    color: '#4a2b2b',
    fontWeight: '600',
  },
  footerSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerSideText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
export default EntryPage;
