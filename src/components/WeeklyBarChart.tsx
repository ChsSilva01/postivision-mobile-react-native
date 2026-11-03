import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/appTheme';

export type DayStats = {
  label: string;
  correct: number;
  incorrect: number;
};

type Props = {
  data: DayStats[];
  maxBarHeight?: number;
};

export default function WeeklyBarChart({ data, maxBarHeight = 150 }: Props) {
  const max = Math.max(1, ...data.flatMap((d) => [d.correct, d.incorrect]));
  const height = (value: number) => (value / max) * maxBarHeight;

  return (
    <View style={styles.row}>
      {data.map((day) => (
        <View key={day.label} style={styles.group}>
          <View style={[styles.bars, { height: maxBarHeight }]}>
            <View
              style={[
                styles.bar,
                { height: height(day.correct), backgroundColor: colors.primary },
              ]}
            />
            <View
              style={[
                styles.bar,
                { height: height(day.incorrect), backgroundColor: colors.accent },
              ]}
            />
          </View>
          <Text style={styles.label}>{day.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  group: {
    alignItems: 'center',
    gap: 6,
  },
  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 3,
  },
  bar: {
    width: 14,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  label: {
    fontSize: 11,
    color: colors.text,
  },
});
