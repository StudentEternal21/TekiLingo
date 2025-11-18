import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './globals.css';

const _layout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>

        <Stack.Screen name="(tabs)" />

        {/* Is this being used? */}
        <Stack.Screen 
          name="course/[id]" 
          options={{ 
            presentation: 'card',
            headerShown: false 
          }} 
        />
      </Stack>
    </>
  );
}

export default _layout;