import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageCourse from './screens/ManageCourse';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentCourses from './screens/RecentCourses';
import AllCourses from './screens/AllCourses';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CourseOverview() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RecentCourses" component={RecentCourses} />
      <Tab.Screen name="AllCourses" component={AllCourses} />
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

const styles = StyleSheet.create({});
