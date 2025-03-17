import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from '@/hooks/useColorScheme';
import Toast from 'react-native-toast-message';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    InterBold: require("../src/assets/fonts/Inter_24pt-Bold.ttf"),
    InterRegular: require("../src/assets/fonts/Inter_24pt-Regular.ttf"),
    InterSemiBold: require("../src/assets/fonts/Inter_24pt-SemiBold.ttf"),

    JetBrainsMonoBold: require("../src/assets/fonts/JetBrainsMono-Bold.ttf"),
    JetBrainsMonoSemiBold: require("../src/assets/fonts/JetBrainsMono-SemiBold.ttf"),
    JetBrainsMonoRegular: require("../src/assets/fonts/JetBrainsMono-Regular.ttf"),
    JetBrainsMonoThin: require("../src/assets/fonts/JetBrainsMonoNL-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)/register" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)/login" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
        <Toast/>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}