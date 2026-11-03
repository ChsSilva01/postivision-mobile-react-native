import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../constants/appTheme';

type Props = {
  hasNotification?: boolean;
  onPressProfile?: () => void;
  onPressBell?: () => void;
};

export default function AppHeader({
  hasNotification = true,
  onPressProfile,
  onPressBell,
}: Props) {
  return (
    <View style={styles.row}>
      <Pressable style={styles.avatar} onPress={onPressProfile}>
        <Ionicons name="person" size={28} color={colors.primary} />
      </Pressable>

      <Pressable onPress={onPressBell} hitSlop={10}>
        <Ionicons name="notifications" size={26} color={colors.primary} />
        {hasNotification && <View style={styles.dot} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    top: 0,
    right: 2,
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.accent,
  },
});
