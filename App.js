import React, { createContext, useState, useContext } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Image, TextInput, Dimensions, FlatList, ScrollView, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import Track from "./components/track_scroll"

//import {requestPermission} from './components/getPermissions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


let DATA_TRACKS = [];
for(let i=1; i != 30; i++){
  DATA_TRACKS.push({ id: ""+i, title: ""+i});
};

const requestPermission = async () => {
  try {
    if (PermissionsAndroid.RESULTS.GRANTED === "granted"){
      return;
    }
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Storage',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />  
      <View style={{
        width: width,
        height: 100,
        //backgroundColor: "red"
      }}/>


      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <FlatList
            style={styles.trask_list}
            data={DATA_TRACKS}
            renderItem={({item}) => <Track title={item.title} color="grey"/>}
            keyExtractor={item => item.id}
          />
      </ScrollView>
      {/*</SafeAreaView>onPressOut={SoundPlayer.playAsset(require())}*/}
      <TouchableOpacity style={styles.button}> 
        <Image source={require("./icons/gear.png")} style={styles.stretch}/>
      </TouchableOpacity> 
      <Button title="request permissions" onPress={requestPermission} />
      <View style={styles.text_input}>
        <TextInput placeholder="Поиск песни" />
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    top: 50,
    left: 15,

    width: 35,
    height: 35,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stretch: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
  },

  text_input: {
    position: 'absolute',
    top: 50,
    right: 20,

    width: 300,
    height: 35,
    borderRadius: 20,
    borderWidth: 3,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trask_list: {
    //position: "absolute",
    //left: -6,
  },
});
