import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import HomeScreen from "./src/screens/HomeScreen";
import ContactYoutube from "./src/screens/startpage";
import Screentwo from "./src/screens/screentwo";
import Usersignuppage from "./src/screens/usersignup";
import Ownersignuppage from "./src/screens/ownersignup";
import ProfileScreen from "./src/screens/ownerlogin";
import Feedbackpage from "./src/screens/feedbackpage";
import LoginScreen from "./src/screens/logintry";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     XYZ: ContactYoutube,
//     S2: Screentwo,
//     usersign: usersignuppage,
//     ownersign: ownersignuppage,
//     ownerlogin: ProfileScreen,
//     feed: feedbackpage,
//     logintry: LoginScreen
//   },
//   {
//     initialRouteName: "logintry",
//     defaultNavigationOptions: {
//       title: "ParkItUp",
//     },
//   }
// );

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="logintry" component={LoginScreen} />
        <Stack.Screen name="Start" component={ContactYoutube} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="S2" component={Screentwo} />
        <Stack.Screen name="UserSign" component={Usersignuppage} />
        <Stack.Screen name="OwnerSign" component={Ownersignuppage} />
        <Stack.Screen name="OwnerLogin" component={ProfileScreen} />
        <Stack.Screen name="feed" component={Feedbackpage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
