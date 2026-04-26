import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function RouteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen successfully mounted.</Text>
      <Text style={styles.subtext}>Navigation matrix is active.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B', // Matches your index.tsx dark mode theme
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtext: {
    color: '#A1A1AA',
    fontSize: 14,
  }
});
