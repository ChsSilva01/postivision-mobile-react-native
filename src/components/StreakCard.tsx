import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../constants/appTheme';

type Props = {
  days: number;
};

export default function StreakCard({ days }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.flameBox}>
        <Ionicons name="flame" size={112} color={colors.accent} />
        <Text style={styles.days}>{days}</Text>
      </View>

      <View style={styles.texts}>
        <Text style={styles.title}>Streak</Text>
        <Text style={styles.subtitle}>
          Realize as análises para aumentar seu streak
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.card,
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  flameBox: {
    width: 112,
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
  },
  days: {
    position: 'absolute',
    bottom: 22,
    fontSize: 34,
    fontWeight: '800',
    color: colors.primary,
  },
  texts: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: colors.text,
    marginTop: 2,
  },
});
