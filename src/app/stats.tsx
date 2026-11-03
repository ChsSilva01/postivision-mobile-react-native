import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import DonutChart from '../components/DonutChart';
import StreakCard from '../components/StreakCard';
import WeeklyBarChart, { DayStats } from '../components/WeeklyBarChart';
import { colors, radius } from '../constants/appTheme';

const FILTERS = ['Todos', 'Agachamento', 'Flexão'] as const;
type Filter = (typeof FILTERS)[number];

// Dados de exemplo — troque pelos dados vindos da API
const WEEK_DATA: DayStats[] = [
  { label: 'Seg', correct: 1, incorrect: 3 },
  { label: 'Ter', correct: 6, incorrect: 7 },
  { label: 'Qua', correct: 6, incorrect: 9 },
  { label: 'Qui', correct: 0, incorrect: 0 },
  { label: 'Sex', correct: 5, incorrect: 8 },
  { label: 'Sáb', correct: 10, incorrect: 10.5 },
  { label: 'Dom', correct: 0.5, incorrect: 1 },
];

export default function Statistics() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>('Todos');

  const exerciseLabel = filter === 'Todos' ? 'Todos os exercícios' : filter;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader onPressProfile={() => router.replace('/profile')} />

        <View style={styles.filters}>
          {FILTERS.map((item) => {
            const selected = item === filter;
            return (
              <Pressable
                key={item}
                style={[styles.chip, selected && styles.chipSelected]}
                onPress={() => setFilter(item)}
              >
                <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <StreakCard days={7} />

        {/* Último treino */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Último treino</Text>
          <Text style={styles.cardSubtitle}>{exerciseLabel}</Text>

          <View style={styles.donutWrapper}>
            <DonutChart percentage={75} />
          </View>

          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: colors.primary }]} />
              <Text style={styles.legendText}>Corretos</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: colors.accent }]} />
              <Text style={styles.legendText}>Incorretos</Text>
            </View>
          </View>
        </View>

        {/* Desempenho semanal */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Desempenho Semanal</Text>
          <Text style={styles.cardSubtitle}>{exerciseLabel}</Text>

          <View style={styles.chartWrapper}>
            <WeeklyBarChart data={WEEK_DATA} />
          </View>
        </View>
      </ScrollView>

      <BottomNav active="Stats" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 130,
    gap: 16,
  },
  filters: {
    flexDirection: 'row',
    gap: 12,
  },
  chip: {
    backgroundColor: colors.white,
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  chipSelected: {
    backgroundColor: colors.primary,
  },
  chipText: {
    fontSize: 14,
    color: colors.text,
  },
  chipTextSelected: {
    color: colors.white,
    fontWeight: '600',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.card,
    padding: 28,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  cardSubtitle: {
    fontSize: 10,
    color: colors.text,
    marginTop: 2,
  },
  donutWrapper: {
    alignItems: 'center',
    marginTop: 12,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  legendText: {
    fontSize: 15,
    color: colors.text,
  },
  chartWrapper: {
    marginTop: 24,
  },
});
