 import { View, Text } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
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
    <SafeAreaView>
      <Text className="text-red-500">HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
