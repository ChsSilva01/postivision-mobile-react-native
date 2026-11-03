import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { colors } from '../constants/appTheme';

type Props = {
  /** Porcentagem de acertos, de 0 a 100 */
  percentage: number;
  size?: number;
  strokeWidth?: number;
};

export default function DonutChart({
  percentage,
  size = 160,
  strokeWidth = 36,
}: Props) {
  const safe = Math.min(100, Math.max(0, percentage));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        {/* Incorretos (fundo) */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors.accent}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Corretos */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors.primary}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${(circumference * safe) / 100} ${circumference}`}
          rotation={-90}
          originX={center}
          originY={center}
        />
      </Svg>

      <View style={styles.center} pointerEvents="none">
        <Text style={styles.value}>{Math.round(safe)}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
});
