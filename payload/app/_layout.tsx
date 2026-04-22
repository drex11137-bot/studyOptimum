import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import { useStudyStore } from '../store/useStudyStore';

export default function RootLayout() {
  const { initialize, isInitialized } = useStudyStore();

  useEffect(() => {
    initialize();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: '#09090B' } 
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B'
  }
});
