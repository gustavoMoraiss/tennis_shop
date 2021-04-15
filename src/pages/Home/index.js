import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../../component/Shoes';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
        <View style={styles.header}>
          <Image
          source={require('../../assets/banner.png')}
          style={styles.Image}
          />
    
        <View style={styles.textContainer}>
        <Text style={[styles.text, {color: '#000'}]}>TÊNIS</Text>
            <Text style={[styles.text, {color: '#CECECF'}]}>°</Text>
            <Text style={[styles.text, {color: '#CECECF'}]}>MASCULINO</Text>

        <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
          <MaterialIcons
            name="filter-list"
            size={24}
            color="#000"
      />
        </TouchableOpacity>
        </View>
   </View>

      <View style={styles.line}/>
      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes img={require('../../assets/1.png')} cost="R$149,90" onClick={() => navigation.navigate('Detail')}>Nike Air Max Dia</Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$280,90" onClick={() => navigation.navigate('Detail')}>Nike Downshifter 10'</Shoes>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes img={require('../../assets/3.png')} cost="R$560,90" onClick={() => navigation.navigate('Detail')}>Adidas Squidward</Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$370,90" onClick={() => navigation.navigate('Detail')}>Adidas React Flyknit 2</Shoes>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Shoes img={require('../../assets/5.png')} cost="R$187,90" onClick={() => navigation.navigate('Detail')}>Adidas Joyride Run Flyknit</Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$370,90" onClick={() => navigation.navigate('Detail')}>Adidas Runneble</Shoes>
        </View>
      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  }, header:{
    marginBottom: 8
  }, Image:{
    width: '100%'
  }, textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  }, text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  }, line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});