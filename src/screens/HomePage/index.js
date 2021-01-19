import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import HeaderComponent from '../../components/header';
import movie from '../../api/resources/movie';
import CardComponent from '../../components/card-component';
import {colors} from "../../utils/theme";

const HomePage = ({navigation}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [onScrollEndSpinner, setOnScrollEndSpinner] = useState(false);

  useEffect(() => {
    setData([]);
  }, []);

  useEffect(() => {
    setOnScrollEndSpinner(true);
    getMovies().then();
  }, [page]);

  const getMovies = async () => {
    try {
      let response = await movie.popular(page);
      setData(data.concat(response.data.results));
    } catch (e) {
      console.log(e);
    }
  };

  const ItemView = ({item}) => {
    return (
      <CardComponent
        key={item.id}
        value={item}
        navigation={navigation}
        routeName={'HomeDetailScreen'}
      />
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent: 'center',
          marginTop: 10,
        }}>
        {onScrollEndSpinner ? (
          <ActivityIndicator color={colors.RED.primary} style={{marginLeft: 8}} />
        ) : null}
      </View>
    );
  };

  const handleGetDate = async () => {
    setOnScrollEndSpinner(true);
    setPage(page + 1);
  };

  return (
    <View style={{flex: 1}}>
      <HeaderComponent handleNavigate={navigation} backButton={false} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
        enableEmptySections={true}
        ListFooterComponent={renderFooter}
        onEndReached={handleGetDate}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
export default HomePage;
