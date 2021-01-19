import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderComponent from '../../components/header';
import {Item, Input, Icon, Button, Text, Spinner} from 'native-base';
import {colors} from '../../utils/theme';
import * as Animatable from 'react-native-animatable';

const SearchMoviePage = ({navigation}) => {
  const [searchText, onSearchText] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);
  const [spinner, setSpinner] = useState(false);

  function onClearText() {
    onSearchText('');
    setIsValidInput(true);
    setSpinner(false);
  }

  function onClickSearch() {
    setSpinner(true);
  }

  const textInputChange = (val) => {
    onSearchText(val);
    if (val.trim().length < 3) {
      setIsValidInput(false);
    } else {
      setIsValidInput(true);
    }
  };

  return (
    <View>
      <HeaderComponent handleNavigate={navigation} backButton={false} />
      <View style={styles.container}>
        <Item style={styles.searchInput}>
          <Input
            placeholder="Firma, kategori, etiket ara"
            value={searchText}
            onChangeText={(val) => textInputChange(val)}
          />
          <Icon
            style={{color: colors.RED.primary}}
            onPress={onClearText}
            name="close-circle"
          />
        </Item>
        {isValidInput ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>2 karakterden az olamaz.</Text>
          </Animatable.View>
        )}
        {spinner ? (
          <Spinner color={colors.RED.primary} />
        ) : (
          <Button full style={styles.buttonStyle} onPress={onClickSearch}>
            <Icon name="ios-search" />
            <Text style={styles.buttonText}>Arama</Text>
          </Button>
        )}
      </View>
      <View style={styles.resultSide}>
        <Text style={styles.resultText}>Aranan Kelimeler : Gençlik, PK, Aamir Khan </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginBottom: 2,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#c6c5c5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    marginBottom: 10,
  },
  buttonStyle: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: colors.RED.primary,
  },
  buttonText: {
    fontWeight: '700',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  resultSide: {
    margin: 10,
    padding: 10,
  },
  resultText: {
    color: '#868686',
  },
});

export default SearchMoviePage;
