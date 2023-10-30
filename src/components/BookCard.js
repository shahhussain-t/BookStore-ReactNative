import {
    FlatList,
    Text,
    View,
    Image,
    ActivityIndicator,
    Pressable,
    StyleSheet, 
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import Rating from './Rating';
  import { useNavigation } from '@react-navigation/native';
  import { useDispatch, useSelector } from 'react-redux';
  import { fetchBooks } from '../../context/BookSlice';

  
  const BookCard = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const booksData = useSelector((state) => state.books);
    const searchState = useSelector((state) => state.search);
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      dispatch(fetchBooks());
    }, []);
  
    const { data, isLoader, isError } = booksData;
  
    useEffect(() => {
      if (!isLoader && !isError && data) {
        setSearchResults(data.data);
      }
    }, [isLoader, isError, data]);
  
    useEffect(() => {
      if (data) {
        if (searchState.searchQuery) {
          const filteredBooks = data.data.filter((item) => {
            const title = item.title.toLowerCase();
            const query = searchState.searchQuery.toLowerCase();
            return title.includes(query);
          });
          setSearchResults(filteredBooks);
        } else {
          setSearchResults(data.data);
        }
      }
    }, [searchState.searchQuery, data]);
  
    if (isLoader) {
      return (
        <ActivityIndicator
          color="#004D6D"
          style={styles.loader}
          size="large"
        />
      );
    }
  
    if (isError) {
      return <Text style={styles.error}>{'Something went wrong'}</Text>;
    }
  
    if (!data) {
      return null;
    }
  
    return (
      <View>
        {isError && <Text style={styles.error}>{isError}</Text>}
        {data && (
          <FlatList
            data={searchResults == null ? data.data : searchResults}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => navigation.navigate('BookDetailsScreen', { item: item })}
                key={index}
                style={styles.bookContainer}
              >
                <View style={styles.likeIconContainer}>
                  {item.is_liked ? (
                    <Image
                      style={styles.likeIcon}
                      source={require('../../assets/images/heartfill.png')}
                    />
                  ) : (
                    <Image
                      style={styles.likeIcon}
                      source={require('../../assets/images/heartmpty.png')}
                    />
                  )}
                </View>
                <Image
                  style={styles.bookImage}
                  source={{ uri: item.imageLink }}
                />
                <Text style={styles.bookTitle}>
                  {item.title.length > 18
                    ? item.title.substring(0, 18) + '...'
                    : item.title}
                </Text>
                <Rating num={'(88)'} />
                <Text style={styles.bookPrice}>{`$${item.price}`}</Text>
              </Pressable>
            )}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    loader: {
      flex: 1,
    },
    error: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10,
    },
    bookContainer: {
      backgroundColor: '#fff',
      height: 285,
      width: 147,
      marginHorizontal: 16,
      marginVertical: 16,
      borderRadius: 5,
      position: 'relative',
    },
    likeIconContainer: {
      position: 'absolute',
      zIndex: 100,
      top: 10.5,
      left: 115,
      gap: 10,
      padding: 6,
      right: 0,
      marginVertical: 2,
      width: 25,
      height: 25,
      borderRadius: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    likeIcon: {
      width: 15.1,
      height: 13,
    },
    bookImage: {
      width: 147,
      height: 219,
      resizeMode: 'contain',
      borderRadius: 5,
    },
    bookTitle: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: 'Poppins_700Bold',
      marginVertical: 3,
      marginHorizontal: 1,
    },
    bookPrice: {
      fontSize: 12,
      fontFamily: 'Poppins_700Bold',
    },
    columnWrapper: {
      justifyContent: 'space-around',
    },
  });
  
  export default BookCard;
  