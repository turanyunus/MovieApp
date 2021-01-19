import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from '../../components/header';
import movie from '../../api/resources/movie';
import Carousel from 'pinar';
import {IMAGE_URL} from '../../api/http';
import {colors} from '../../utils/theme';

const NewMoviesPage = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
  }, []);
  useEffect(() => {
    getMovies().then();
  }, []);

  const getMovies = async () => {
    try {
      let response = await movie.top_rated(1);
      console.log(response.data)
      setData(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <HeaderComponent handleNavigation={navigation} backButton={false} />
      <Carousel showsControls height={'100%'} style={{marginTop: 20}}>
        {data?.map((value, i) => {
          return (
            <View key={i} style={styles.imgContainer}>
              <Image
                source={{uri: `${IMAGE_URL}original/${value.backdrop_path}`}}
                style={styles.postImageStyle}
              />
              <Text style={styles.listTitleTextStyle}>{value.title}</Text>

              <View style={styles.overview}>
                <Text style={styles.aboutTitle}>Hakkında</Text>
                <Text numberOfLines={14} style={styles.aboutText}>
                  {value.overview}
                </Text>
              </View>
            </View>
          );
        })}
      </Carousel>
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImageStyle: {
    backgroundColor: colors.RED.primary,
    height: windowHeight / 5.5,
    width: windowWidth / 2.5,
    borderRadius: windowHeight / 5.5,
  },
  listTitleTextStyle: {
    color: '#111111',
    fontSize: 19,
    marginTop: 10,
  },
  overview: {
    marginTop: windowHeight * 0.07,
    marginRight: windowHeight * 0.07,
    marginLeft: windowHeight * 0.07,
    fontSize: 18,
  },
  aboutTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  aboutText: {
    fontSize: 17,
  },
});

export default NewMoviesPage;
