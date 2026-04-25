import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function IndexScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning,</Text>
        <Text style={styles.username}>Student</Text>
      </View>

      <View style={styles.streakCard}>
        <Text style={styles.streakLabel}>Current Streak</Text>
        <Text style={styles.streakNumber}>12 days</Text>
        <Text style={styles.streakSubtext}>Next review due in 2 hours</Text>
      </View>

      <Text style={styles.sectionTitle}>Your Workspace</Text>

      <View style={styles.grid}>
        
        <TouchableOpacity style={[styles.card, styles.cardAccent]}>
          <Text style={[styles.cardTitle, styles.cardTitleAccent]}>Focus Session</Text>
          <Text style={[styles.cardDesc, styles.cardDescAccent]}>Enter deep work</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Spaced Rep</Text>
          <Text style={styles.cardDesc}>30 cards due</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Capture</Text>
          <Text style={styles.cardDesc}>Quick notes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Planner</Text>
          <Text style={styles.cardDesc}>Schedule tasks</Text>
        </TouchableOpacity>

      </View>

      <View style={{ marginTop: 40 }}>
        <TouchableOpacity style={styles.secondaryButton}>
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
  header: {
    marginBottom: 32,
  },
  greeting: {
    fontSize: 12,
    color: '#71717A',
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  username: {
    fontSize: 32,
    color: '#EDEDED',
    fontWeight: '300',
    fontStyle: 'italic',
    fontFamily: 'serif',
  },
  streakCard: {
    backgroundColor: '#18181B',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#27272A',
    marginBottom: 40,
  },
  streakLabel: {
    fontSize: 12,
    color: '#A1A1AA',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 8,
  },
  streakNumber: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: '300',
    fontStyle: 'italic',
    fontFamily: 'serif',
    marginBottom: 8,
  },
  streakSubtext: {
    fontSize: 13,
    color: '#71717A',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 12,
    color: '#71717A',
    textTransform: 'uppercase',
    fontWeight: '700',
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
    width: '47%',
    backgroundColor: '#18181B',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#27272A',
  },
  cardAccent: {
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },
  cardTitle: {
    fontSize: 16,
    color: '#EDEDED',
    fontWeight: '600',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#A1A1AA',
  },
  cardTitleAccent: {
    color: '#09090B',
  },
  cardDescAccent: {
    color: '#52525B',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#27272A',
    paddingVertical: 12,
    borderRadius: 100,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#A1A1AA',
    fontSize: 13,
    fontWeight: '500',
  },
});
