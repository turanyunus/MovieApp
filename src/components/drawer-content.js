import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Icon, List, ListItem, Left, Right, Body} from 'native-base';

export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {/* Appname'nin oldugu kısım */}
        <View style={styles.drawerItemStyle}>
          <Image
            source={require('../assets/img/splash-logo.png')}
            style={styles.appNameIcon}
          />
          <View style={styles.appNameText}>
            <Text style={styles.title}>Movie App</Text>
          </View>
        </View>
        {/* Kategori listesinin oldugu kısım */}
        <List>
          <ListItem style={styles.listItem}>
            <Left>
              <Image
                source={require('../assets/img/splash-logo.png')}
                style={styles.listItemIcon}
              />
            </Left>
            <Body>
              <Text numberOfLines={2} style={styles.listItemText}>
                Category
              </Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </DrawerContentScrollView>
    </View>
  );
}

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,254,252)',
  },
  drawerItemStyle: {
    flexDirection: 'row',
    marginLeft: height * 0.02,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 1,
    paddingBottom: height * 0.01,
  },
  appNameIcon: {
    height: height * 0.08,
    width: height * 0.06,
    marginRight: height * 0.03,
  },
  appNameText: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#666666',
    fontWeight: '700',
  },
  listItem: {
    flex: 1,
    height: height * 0.08,
    marginTop: height * 0.01,
  },
  listItemIcon: {
    height: height * 0.07,
    width: height * 0.06,
  },
  listItemText: {
    fontSize: 17,
    color: '#666666',
    fontWeight: '600',
  },
});
