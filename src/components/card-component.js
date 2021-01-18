import React from 'react';

import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {Body, Button, Left, ListItem, Right, Text} from 'native-base';
import {IMAGE_URL} from '../api/http';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function CardComponent({value, navigation, routeName}) {
  const renderAverageButtonItem = (averagePoint) => {
    if (averagePoint >= 0 && averagePoint < 7)
      return (
        <View success style={[styles.buttonRankStyle, styles.ratingPointRed]}>
          <Text
            style={styles.buttonTitleRankStyle}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {averagePoint}
          </Text>
        </View>
      );
    else if (averagePoint >= 7 && averagePoint < 8)
      return (
        <View
          success
          style={[styles.buttonRankStyle, styles.ratingPointOrange]}>
          <Text
            style={styles.buttonTitleRankStyle}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {averagePoint}
          </Text>
        </View>
      );
    else if (averagePoint >= 8 && averagePoint < 8.5)
      return (
        <View
          success
          style={[styles.buttonRankStyle, styles.ratingPointLightGreen]}>
          <Text
            style={styles.buttonTitleRankStyle}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {averagePoint}
          </Text>
        </View>
      );
    else if (averagePoint >= 8.5 && averagePoint < 9)
      return (
        <View success style={[styles.buttonRankStyle, styles.ratingPointGreen]}>
          <Text
            style={styles.buttonTitleRankStyle}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {averagePoint}
          </Text>
        </View>
      );
    else if (averagePoint >= 9)
      return (
        <View style={[styles.buttonRankStyle, styles.ratingPointDarkGreen]}>
          <Text
            style={styles.buttonTitleRankStyle}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {averagePoint}
          </Text>
        </View>
      );

    return (
      <Button success style={styles.buttonRankStyle}>
        <Text
          style={styles.buttonTitleRankStyle}
          numberOfLines={1}
          adjustsFontSizeToFit>
          -
        </Text>
      </Button>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ListItem style={styles.containerList}>
        <Left>
          <Image
            source={{uri: `${IMAGE_URL}original/${value.backdrop_path}`}}
            style={styles.postImageStyle}
          />
        </Left>
        <Body>
          <View style={styles.bodyStyle}>
            <Text numberOfLines={1} style={styles.title}>
              {value.title}
            </Text>
            <Text numberOfLines={3} style={styles.overview}>
              {value.overview}
            </Text>
            <Text numberOfLines={1} style={styles.detailDate}>
              <Text style={styles.overview}>Yayın : </Text> {value.release_date}
            </Text>
            <Text numberOfLines={1} style={styles.detailDate}>
              <Text style={styles.overview}>Oylar : </Text> {value.vote_count}
            </Text>
          </View>
        </Body>
        <Right style={styles.rightStyle}>
          {renderAverageButtonItem(value.vote_average)}
        </Right>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: '#ffffff',
    margin: '2%',
    padding: '2%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  postImageStyle: {
    height: windowHeight / 5.5,
    width: windowWidth / 2.5,
    borderRadius: 5,
  },
  bodyStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: windowHeight / 5.5,
  },
  title: {
    fontWeight: 'bold',
    color: '#4c4b4b',
    height: '20%',
  },
  overview: {
    fontWeight: '500',
    color: '#aeaeae',
    height: '50%',
    lineHeight: 20,
  },
  detailDate: {
    fontSize: 14,
    fontWeight: '700',
    color: '#696969',
    marginTop: 2,
  },
  rightStyle: {
    flex: 0.07,
    bottom: 5,
    right: 10,
    position: 'absolute',
    textAlign: 'center',
  },
  buttonRankStyle: {
    height: 40,
    width: 40,
    borderRadius: 50 / 2,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleRankStyle: {
    fontSize: 15,
    fontWeight: '900',
    color: 'white',
  },
  ratingPointRed: {
    backgroundColor: '#ba0808',
  },
  ratingPointOrange: {
    backgroundColor: '#FF7B23',
  },
  ratingPointLightGreen: {
    backgroundColor: '#63b14a',
  },
  ratingPointGreen: {
    backgroundColor: '#53923e',
  },
  ratingPointDarkGreen: {
    backgroundColor: 'green',
  },
});

export default CardComponent;
