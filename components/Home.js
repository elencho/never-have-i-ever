import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const randomItem = QuestionChild[Math.floor(Math.random() * QuestionChild.length)];


function Home ({ navigation }) {
  return (
    <>
<ImageBackground source={require('../images/wall.jpeg')} style={styles.back}>
  <View style={styles.box}>
    
<Image source={require('../images/logo.png')} style={styles.logo}/>
<TouchableOpacity onPress={() => {navigation.navigate('Questions')
 QuestionChild[Math.floor(Math.random() * QuestionChild.length)]}}>
<View style={styles.container}
>
  <Image source={require('../images/game.png')} style={styles.icons}/>
  <Text style={{fontFamily: 'bpg_extrasquare_mtavruli_2009', fontSize: 20}}>გასართობი</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('QuestionsTeens')}>
<View style={styles.container2}>
  <Text style={{fontFamily: 'bpg_extrasquare_mtavruli_2009', fontSize: 20}}>ცენზურა</Text>
  <Image source={require('../images/hand.png')} style={styles.icons}/>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('QuestionsAdult')}>
<View style={styles.container3}>
  <Image source={require('../images/gender.png')} style={styles.icons}/>
  <Text style={{fontFamily: 'bpg_extrasquare_mtavruli_2009', fontSize: 20}}>18+ და რამე</Text>
  </View>
  </TouchableOpacity>
</View> 
  </ImageBackground> 
    </>
  );
};




const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator  
     >

      <Stack.Screen name="Home" component={Home} />
      
    <Stack.Screen name="Questions" component={Questions} />

      
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
back:{
  flex:1,
  width: null,
  height: null,
},
heading: {
  color: '#fff',
  fontSize: 30
},
box:{
  alignItems: 'center',
  padding: 30,
  
},
logo:{
  height:200,
  width: 200
},
container: {
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:"center",
  margin: 15,
  width: 350,
  height: 90,
  backgroundColor: '#8400FF',
  borderRadius: 10,
  padding: 10
},
container2: {
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:"center",
  margin: 15,
  width: 350,
  height: 90,
  backgroundColor: '#FF5B00',
  borderRadius: 10,
  padding: 10
},
container3: {
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:"center",
  margin: 15,
  width: 350,
  height: 90,
  backgroundColor: '#FF0066',
  borderRadius: 10,
  padding: 10
}
});

export default Home;
