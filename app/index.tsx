import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Critical: Injects the navigation engine

export default function HomeScreen() {
  const router = useRouter(); // Initialize the engine

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      <Text style={styles.title}>Student</Text>
      
      <View style={styles.streakCard}>
        <Text style={styles.streakLabel}>CURRENT STREAK</Text>
        <Text style={styles.streakNumber}>12 days</Text>
        <Text style={styles.streakSubtext}>Next review due in 2 hours</Text>
      </View>

      <Text style={styles.sectionTitle}>YOUR WORKSPACE</Text>
      
      <View style={styles.grid}>
        {/* Navigation Bind 1: Focus */}
        <TouchableOpacity 
          style={styles.card}
          onPress={() => router.push('/focus')}
        >
          <Text style={styles.cardTitle}>Focus Session</Text>
          <Text style={styles.cardSubtext}>Enter deep work</Text>
        </TouchableOpacity>

        {/* Navigation Bind 2: Spaced Rep */}
        <TouchableOpacity 
          style={styles.card}
          onPress={() => router.push('/spaced-rep')}
        >
          <Text style={styles.cardTitle}>Spaced Rep</Text>
          <Text style={styles.cardSubtext}>30 cards due</Text>
        </TouchableOpacity>

        {/* Navigation Bind 3: Capture */}
        <TouchableOpacity 
          style={styles.card}
          onPress={() => router.push('/capture')}
        >
          <Text style={styles.cardTitle}>Capture</Text>
          <Text style={styles.cardSubtext}>Quick notes</Text>
        </TouchableOpacity>

        {/* Navigation Bind 4: Planner */}
        <TouchableOpacity 
          style={styles.card}
          onPress={() => router.push('/planner')}
        >
          <Text style={styles.cardTitle}>Planner</Text>
          <Text style={styles.cardSubtext}>Schedule tasks</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 40 }}>
        {/* Navigation Bind 5: Settings */}
        <TouchableOpacity 
          style={styles.secondaryCard}
          onPress={() => router.push('/settings')}
        >
          <Text style={styles.secondaryText}>About & Legal Settings</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B',
  },
  content: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontFamily: 'serif',
    fontStyle: 'italic',
    marginBottom: 32,
  },
  streakCard: {
    backgroundColor: '#18181B',
    padding: 24,
    borderRadius: 16,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#27272A',
  },
  streakLabel: {
    color: '#A1A1AA',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 8,
  },
  streakNumber: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 4,
  },
  streakSubtext: {
    color: '#71717A',
    fontSize: 14,
  },
  sectionTitle: {
    color: '#A1A1AA',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    backgroundColor: '#18181B',
    padding: 20,
    borderRadius: 16,
    width: '47%',
    borderWidth: 1,
    borderColor: '#27272A',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardSubtext: {
    color: '#71717A',
    fontSize: 12,
  },
  secondaryCard: {
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#27272A',
    alignItems: 'center',
  },
  secondaryText: {
    color: '#A1A1AA',
    fontSize: 14,
    fontWeight: '500',
  },
});
