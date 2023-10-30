import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_700Bold, } from '@expo-google-fonts/poppins';


const Header = () => {
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Hi Nick</Text>
                <View style={styles.headerImage}>
                    <Image source={require('../../assets/images/Ellipse1.png')} />
                </View>
            </View>
        )
    }
}

export default Header

const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginHorizontal:16,
        marginTop: 5

    },
    headerText: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
        lineHeight: 27,
        color: '#000000'

    },
    headerImage: {
        width: 50,
        height: 50

    }
})