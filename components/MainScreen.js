import React from 'react';
import { FlatList, StyleSheet, View, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import noi_lau_img from '../assets/noi_lau.jpg';
import { Text } from 'react-native-paper';

const DATA = [
    {
        id: "1",
        Name: "Ca nấu lẩu, mấu mì",
        Shop: "Devang",
        image: noi_lau_img
    },
    {
        id: "2",
        Name: "Bánh mì chảo",
        Shop: "Devang",
        image: noi_lau_img
    },
    {
        id: "3",
        Name: "Cơm gà",
        Shop: "Devang",
        image: noi_lau_img
    },
    {
        id: "4",
        Name: "Khô gà bơ tỏi",
        Shop: "LTD Food",
        image: noi_lau_img
    }
]
const Item = ({Name,Shop, image }) => (
    <View style={{flexDirection: 'row', height:120}}>
        <View style={{flex: 1}}>
        <Image source={image} style={{width:100, height:100}} />
        </View>
      <View style={{flex:2, marginTop:20, marginLeft:30}}>
        <Text style={{marginBottom:5}}>{Name}</Text>
        <Text> Shop: {Shop}</Text>
      </View>
      <View style={{flex:1, marginTop: 30}}>
        <Button color='red' title='Chat'/>
      </View>
    </View>
);

function MainScreen() {
    return ( 
        <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={({ item }) => (
                <Item Name={item.Name} Shop={item.Shop} image={item.image} />
            )}
            keyExtractor={item => item.id}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#fff',
    },
    column: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fullColumn: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 100,
      height: 100,
    },
  });
  

export default MainScreen;