import { ScrollView, StyleSheet, Text, View, Image, Pressable,Linking } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Rating from '../components/Rating';

const BookDetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;
    const data = item;
    const handleDetails = (externalLink) => {
        if (externalLink) {
          Linking.openURL(externalLink)
            .then(() => {
              console.log(`Opened in the default web browser: ${externalLink}`);
            })
            .catch((error) => {
              console.error(`Failed to open external link: ${externalLink}`, error);
            });
        }
      };
      

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image style={styles.arrowImage} source={require('../../assets/images/arrow-left.png')} />
                </Pressable>

                <View style={styles.shadowBox}>
                    <Image style={styles.coverImage} source={{ uri: data.imageLink }} />

                    <View style={styles.infoContainer}>
                        <View style={styles.infoRow}>
                            <Text>Rating</Text>
                            <Rating num={''} />
                        </View>
                        <View style={styles.infoRow}>
                            <Text>Rating</Text>
                            <Text>(88)</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text>Price</Text>
                            <Text>{`$${data.price}`}</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.title}>{data.title}</Text>

                <View style={styles.detailsContainer}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Author:</Text>
                        <Text style={styles.inerr}>{data.author}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Country:</Text>
                        <Text style={styles.inerr}>{data.country}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Language:</Text>
                        <Text style={styles.inerr}>{data.language}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Year:</Text>
                        <Text style={styles.inerr}>{data.year}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Pages:</Text>
                        <Text style={styles.inerr}>{data.pages}</Text>
                    </View>
                </View>

                <Pressable
                onPress={() => {
                    handleDetails(data.link); 
                  }}
                style={styles.button} >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>View Details</Text>
                        <Image source={require('../../assets/images/external-link.png')} />
                    </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    arrowImage: {
        width: 20,
    },
    shadowBox: {
        marginTop: 20,
        borderRadius: 0,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    coverImage: {
        width: '100%',
        aspectRatio: 2 / 3,
        borderRadius: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    infoRow: {
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins_700Bold',
        marginVertical: 10,
    },
    detailsContainer: {
        marginVertical: 5,
    },
    detailRow: {
        flexDirection: 'row',
        marginVertical: 5,
     
    },
    detailLabel: {
        fontSize: 16,
        fontFamily: 'Poppins_700Bold',
    },
    button: {
        marginVertical: 20,
    },
    buttonContainer: {
        width: '100%',
        height: 45,
        backgroundColor: '#004D6D',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        marginHorizontal: 3,
    },
    inerr:{
        fontSize:15,
        marginVertical:2,
        marginHorizontal:4
    }
});
