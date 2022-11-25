import React, { useEffect } from "react";
import {NavigationContainer, DefaultTheme, DarkTheme, useNavigation} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux'
import { TailwindProvider } from "tailwindcss-react-native";
import OnBoarding from "./screens/OnBoarding";
import { store } from "./redux/store";
import AppStack from "./screens/AppStack";
import { Provider as PaperProvider } from 'react-native-paper';

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
          <PaperProvider>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={AppStack} />
              <Stack.Screen name="OnBoarding" component={OnBoarding} />
            </Stack.Navigator>
          </PaperProvider>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
