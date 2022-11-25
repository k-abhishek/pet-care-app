import React, {useEffect, useLayoutEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import Icon from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeScreen from "../screens/HomeScreen";
import Requests from "../screens/Requests";
import Message from "../screens/Message";
import Calendar from "../screens/Calendar";

const Tab = createBottomTabNavigator();

function AppStack(props) {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value === null) {
        navigation.navigate("OnBoarding");
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
      <Tab.Navigator className='mt-2' screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent = null;
          if (route.name === 'Home') {
            iconComponent = focused
                ? <Icon name='home' size={size} color={color} />
                : <Icon name='home' size={size}/>;
          } else if (route.name === 'Messages') {
            iconComponent = focused
                ? <Icon name='message1' size={size} color={color} />
                : <Icon name='message1' size={size}/>;
          } else if(route.name === "Requests") {
            iconComponent = focused
                ? <MaterialCommunityIcons name='calendar-check' size={size} color={color} />
                : <MaterialCommunityIcons name='calendar-check' size={size}/>;
          } else if( route.name === "Calendar"){
            iconComponent = focused
                ? <MaterialCommunityIcons name='calendar-month' size={size} color={color} />
                : <MaterialCommunityIcons name='calendar-month' size={size}/>;
          }
          // You can return any component that you like here!
          return iconComponent
        },
        tabBarActiveTintColor: '#e26a29',
        tabBarInactiveTintColor: 'gray',
        //tabBarStyle: {paddingTop: 'size'}
      })}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Requests" component={Requests}/>
        <Tab.Screen name="Calendar" component={Calendar}/>
        <Tab.Screen name="Messages" component={Message}/>
      </Tab.Navigator>
  );
}

export default AppStack;