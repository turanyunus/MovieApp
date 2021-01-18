import React from 'react';
import {Header, Left, Body, Button, Title, Right} from 'native-base';
import {Image, StatusBar, StyleSheet} from 'react-native';

function HeaderComponent(props) {
  return (
    <Header style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Left style={{paddingLeft: 10}}>
        <Button transparent onPress={() => props.handleNavigate.openDrawer()}>
          <Image
            source={require('../assets/img/menu.png')}
            style={{height: 24, width: 24}}
          />
        </Button>
      </Left>
      <Body>
        <Title style={styles.title}>Movie App</Title>
      </Body>
      <Right></Right>
    </Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff3d3d',
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HeaderComponent;
