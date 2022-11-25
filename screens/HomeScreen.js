import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
        <Card className='bg-[#fff9ed] h-60 mx-2 font-["Poppins] p-3'>
          <Card.Title subtitle={<Paragraph className='text-textColor'>Hello Abhishek</Paragraph>}
                      right={(props)=><Avatar.Image size={35} source={require('../assets/icon.png')}/>}/>
        </Card>
      </SafeAreaView>
  );
};

export default HomeScreen;
