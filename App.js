import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageCourse from './screens/ManageCourse';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentCourses from './screens/RecentCourses';
import AllCourses from './screens/AllCourses';
import { Entypo } from '@expo/vector-icons'; // zaman iconu
import { FontAwesome5 } from '@expo/vector-icons'; //home iconu
import { MaterialCommunityIcons } from '@expo/vector-icons'; //plus iconu


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CourseOverview() {
  return (
    <Tab.Navigator screenOptions={ ({navigation}) =>  ({
      headerStyle:{backgroundColor:'orange'},//Üst kısım
      headerTintColor:'white',
      tabBarStyle :{backgroundColor:'orange'},//Alt kısım
      tabBarActiveTintColor:'darkblue',
      // iki farklı sekmedede gözüken fonksiyon
      headerRight: () => (
        <Pressable style={({pressed})=> pressed && styles.pressed } onPress={() =>{
          navigation.navigate('ManageCourse')//managecourse ekranına gitmesini istiyorum
        }}>  
          <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="bookmark-plus" size={30} color="black" />

          </View>
        </Pressable>
      ),
    })}> 
      <Tab.Screen name="RecentCourses" component={RecentCourses} options={
        {
          title: 'Yakın Zamanda Kaydolunanlar',
          tabBarLabel:'Yakın Zamanda',
          tabBarIcon:({color,size}) => (<Entypo name="back-in-time" size={30} color={color} />)
        }
      } />
      <Tab.Screen name="AllCourses" component={AllCourses}  options={
        {
          title: 'Öğrenim İçeriğim',
          tabBarLabel:'Tüm Kurslar',
          tabBarIcon:({color,size}) => (<FontAwesome5 name="home" size={30} color={color} />)
        }
      }/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CourseOverview"
          component={CourseOverview}
          options={{ headerShown: false }} //müdahale ederek headerın gözükmemesini sağladım.
        />
        <Stack.Screen name="ManageCourse" component={ManageCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pressed:{
    opacity:0.5,
  },
  iconContainer:{
    marginHorizontal:8,
    marginVertical:2,
  },
});
