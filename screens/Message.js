import React, {useLayoutEffect} from 'react';
import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

function Message(props) {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
      <SafeAreaView style={{flex: 1}}><View><Text>message</Text></View></SafeAreaView>
  );
}

export default Message;