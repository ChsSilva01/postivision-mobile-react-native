import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import StreakCard from '../components/StreakCard';
import { colors, radius } from '../constants/appTheme';

type Props = {
  userName?: string;
  streak?: number;
  onStartAnalysis?: () => void;
  onOpenSuggestions?: () => void;
};

export default function Home({
  userName = 'Renan',
  streak = 7,
  onStartAnalysis,
  onOpenSuggestions,
}: Props) {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader onPressProfile={() => router.replace('/profile')} />

        <Text style={styles.greeting}>
          Olá, <Text style={styles.greetingName}>{userName}</Text>
        </Text>

        {/* Faça sua análise */}
        <View style={styles.analysisCard}>
          <Text style={styles.analysisTitle}>Faça sua análise</Text>
          <Text style={styles.analysisText}>
            Corrija sua postura e melhore seu desempenho nos exercícios físicos.
          </Text>

          <View style={styles.analysisFooter}>
            <View style={styles.eyeScan}>
              <Ionicons name="scan-outline" size={84} color={colors.primary} />
              <Ionicons
                name="eye-outline"
                size={44}
                color={colors.primary}
                style={styles.eyeIcon}
              />
            </View>

            <Pressable style={styles.startButton} onPress={onStartAnalysis}>
              <Text style={styles.startText}>Iniciar</Text>
              <View style={styles.cameraCircle}>
                <Ionicons name="camera" size={20} color={colors.primary} />
              </View>
            </Pressable>
          </View>
        </View>

        {/* Estatísticas */}
        <View style={styles.row}>
          <Pressable
            style={[styles.tile, styles.tileLavender, { flex: 1.6 }]}
            onPress={() => router.replace('/stats')}
          >
            <Text style={styles.tileTitle}>Estatísticas</Text>
            <Text style={styles.tileText}>
              Verifique as estatísticas das suas últimas sessões
            </Text>
          </Pressable>

          <Pressable
            style={[styles.tile, styles.tileOutline, styles.tileCenter, { flex: 1 }]}
            onPress={() => router.replace('/stats')}
          >
            <Text style={styles.outlineText}>Ver mais detalhes</Text>
          </Pressable>
        </View>

        {/* Sugestões */}
        <View style={styles.row}>
          <Pressable
            style={[styles.tile, styles.tileOutline, styles.tileCenter, { flex: 1 }]}
            onPress={onOpenSuggestions}
          >
            <Text style={styles.outlineText}>Receber Sugestões</Text>
          </Pressable>

          <Pressable
            style={[styles.tile, styles.tileDark, { flex: 1.6 }]}
            onPress={onOpenSuggestions}
          >
            <Text style={[styles.tileTitle, styles.lightText]}>Sugestões</Text>
            <Text style={[styles.tileText, styles.lightText]}>
              Treine com segurança, corrija sua postura
            </Text>
          </Pressable>
        </View>

        <StreakCard days={streak} />
      </ScrollView>

      <BottomNav active="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 130,
    gap: 16,
  },
  greeting: {
    fontSize: 20,
    color: colors.text,
    marginTop: 8,
  },
  greetingName: {
    fontWeight: '700',
  },
  analysisCard: {
    backgroundColor: colors.white,
    borderRadius: radius.card,
    padding: 24,
  },
  analysisTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  analysisText: {
    fontSize: 13,
    color: colors.text,
    marginTop: 4,
  },
  analysisFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  eyeScan: {
    width: 84,
    height: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeIcon: {
    position: 'absolute',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: colors.primary,
    borderRadius: 24,
    paddingVertical: 8,
    paddingLeft: 20,
    paddingRight: 8,
  },
  startText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  cameraCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  tile: {
    minHeight: 96,
    borderRadius: radius.card,
    padding: 18,
    justifyContent: 'center',
  },
  tileLavender: {
    backgroundColor: colors.lavender,
  },
  tileDark: {
    backgroundColor: colors.primary,
  },
  tileOutline: {
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  tileCenter: {
    alignItems: 'center',
  },
  tileTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  tileText: {
    fontSize: 12,
    color: colors.text,
    marginTop: 4,
  },
  lightText: {
    color: colors.white,
  },
  outlineText: {
    fontSize: 15,
    color: colors.text,
    textAlign: 'center',
  },
});
