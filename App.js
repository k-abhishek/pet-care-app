import React, { useEffect } from "react";
import { NavigationContainer,  DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux'
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";
import OnBoarding from "./screens/OnBoarding";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;
  const MyTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#e26a29',
    },
  };
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Black.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
