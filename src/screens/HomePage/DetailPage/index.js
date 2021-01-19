import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../../components/header';
import {View, Dimensions, Image, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base';
import movie from '../../../api/resources/movie';
import {IMAGE_URL} from '../../../api/http';

const DetailPage = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    getByIdMovie().then();
  }, []);

  const getByIdMovie = async () => {
    try {
      let response = await movie.getById(props.route.params.itemId);
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <HeaderComponent handleNavigate={props.navigation} backButton={true} />
      <View style={styles.imgContainer}>
        <Image
          source={{uri: `${IMAGE_URL}original/${data.backdrop_path}`}}
          style={styles.postImageStyle}
        />
      </View>
      <View style={{alignItems: 'center', marginHorizontal: 20}}>
        <Text style={styles.name}>{data.title}</Text>
        <Text style={styles.releaseDate}>
          <Text style={styles.releaseText}>Yayın Tarihi : </Text>{' '}
          {data.release_date}
        </Text>
        <View style={styles.about}>
          <Text style={styles.aboutItem}>
            <Icon name={'bar-chart'} style={styles.iconStyle} />
            {'  '}
            {data.vote_average}
          </Text>
          <Text style={styles.aboutItem}>
            <Icon name={'color-filter'} style={styles.iconStyle} />
            {'  '}
            {data.vote_count}
          </Text>
          <Text style={styles.aboutItem}>
            <Icon name={'flame'} style={styles.iconStyle} />
            {'  '}
            {data.popularity}
          </Text>
        </View>
        <Text style={styles.description}>{data.overview}</Text>
      </View>
    </>
  );
};
const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 6,
  },
  postImageStyle: {
    height: height * 0.3,
    width: height * 0.3,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 24,
    color: '#696969',
    fontWeight: 'bold',
  },
  releaseText: {
    fontSize: 17,
    color: '#8f8f8f',
  },
  releaseDate: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 17,
    color: '#737373',
  },
  about: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  aboutItem: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  iconStyle: {
    fontSize: 20,
    color: '#727272',
  },
  description: {
    textAlign: 'center',
    marginTop: 30,
    color: '#696969',
    fontSize: 17,
  },
});

export default DetailPage;
