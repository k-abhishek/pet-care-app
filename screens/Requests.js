import React, {useLayoutEffect} from 'react';
import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

function Requests(props) {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
      <SafeAreaView style={{flex: 1}}><View><Text>Request</Text></View></SafeAreaView>
  );
}

export default Requests;