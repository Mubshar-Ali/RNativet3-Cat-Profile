import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const Data = () => {
  return (
    <View style={styles.box}>
    <View style={styles.imagecontainer}>
      <Image style= {{height:150, width:150, borderRadius: 75}}
         source={{
          uri: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        }}
      />

    </View>
      
      <Text style={styles.text}>Mubashir Ali</Text>
      <Text style={styles.para}>
        Just a cool cat exploring the world of React Native!
      </Text>
    </View>
  );
};
export default Data;
const styles = StyleSheet.create({
  box: {
    margin: 20,
    alignItems: 'center',
    borderRadius: 20,
    // backgroundColor: 'offwhite',
    elevation:4,
    shadowColor: 'red',
    shadowOpacity: 0.9,
    shadowOffset: { height: 5, width: 3 },
    shadowRadius: 10,
  },
  imagecontainer: {
    height: 150,
    width: 150,
    borderRadius: 75,
    margin: 30,
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.9,
    shadowColor: 'red',
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  para: {
    textAlign: 'center',
    margin: 15,
  },
});
