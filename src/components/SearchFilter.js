import { StyleSheet, Text, View ,Image, TextInput} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updateSearchQuery } from '../../context/searchSlice'



const SearchFilter = ({icon,placeholder}) => {
    const dispatch = useDispatch();

  const handleSearch = (query) => {
    dispatch(updateSearchQuery(query));
  };
   
  return (
    <View style={
        {
            flexDirection:'row',
            paddingVertical:16,
            marginHorizontal:16,
            marginVertical:30,
            backgroundColor:'#D3D3D3',
            borderRadius:50,
            height:46,
            alignItems:'center',
          
        
            }}>
               
      <Image style={{marginHorizontal:16}} source={icon} />
      <TextInput 
       placeholder="Search"
       onChangeText={(text) => handleSearch(text)}
     
       style={{height:45,color:'#000',fontSize:14}}>
      { placeholder}
      </TextInput>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({})