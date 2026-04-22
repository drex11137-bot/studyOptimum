import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

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
        <Link href="/study" asChild>
          <TouchableOpacity style={[styles.card, styles.cardAccent]}>
            <Text style={[styles.cardTitle, styles.cardTitleAccent]}>Focus Session</Text>
            <Text style={[styles.cardDesc, styles.cardDescAccent]}>Enter deep work</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/flashcards" asChild>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Spaced Rep</Text>
            <Text style={styles.cardDesc}>30 cards due</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/notes" asChild>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Capture</Text>
            <Text style={styles.cardDesc}>Quick notes</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/planner" asChild>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>Planner</Text>
            <Text style={styles.cardDesc}>Schedule tasks</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={{ marginTop: 40 }}>
        <Link href="/about" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>About & Legal Settings</Text>
          </TouchableOpacity>
        </Link>
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
    marginTop: 4,
  },
  streakCard: {
    backgroundColor: '#18181B',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#27272A',
  },
  streakLabel: {
    color: '#71717A',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  streakNumber: {
    fontSize: 40,
    color: '#EDEDED',
    fontWeight: '300',
    fontStyle: 'italic',
    fontFamily: 'serif',
  },
  streakSubtext: {
    color: '#3B82F6',
    fontSize: 13,
    marginTop: 8,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 12,
    color: '#71717A',
    fontWeight: '700',
    textTransform: 'uppercase',
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
    borderRadius: 16,
    padding: 20,
    width: '47%',
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
  cardTitleAccent: {
    color: '#09090B',
    fontWeight: '700',
  },
  cardDesc: {
    fontSize: 12,
    color: '#A1A1AA',
  },
  cardDescAccent: {
    color: '#52525B',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#27272A',
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#A1A1AA',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.5,
  }
});
