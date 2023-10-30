import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect}from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchFilter from '../components/SearchFilter'
import searchicon from '../../assets/images/searchIcon.png'
import BookCard from '../components/BookCard'



const BookListScreen = () => {
    
    
  return (


 
    <SafeAreaView style={{flex:1}}>
       <Header/>
  


    
       <SearchFilter icon={searchicon} placeholder={"Search"}/>

       <View style={{flex:1,marginBottom:10}}>

       <BookCard />

       </View>
     
      
    </SafeAreaView>
 
  )
}

export default BookListScreen
