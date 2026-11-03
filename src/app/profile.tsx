import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';
import { colors, radius } from '../constants/appTheme';

type ProfileData = {
  nome: string;
  sobrenome: string;
  genero: string;
  email: string;
  telefone: string;
  cpf: string;
  rg: string;
};

type Props = {
  data?: ProfileData;
  avatar?: ImageSourcePropType;
  onEdit?: () => void;
  onSettings?: () => void;
  onOpenActivities?: () => void;
};

// Dados de exemplo — troque pelos dados do usuário logado
const MOCK: ProfileData = {
  nome: 'Carlos',
  sobrenome: 'Silva',
  genero: 'Masculino',
  email: 'renanzanettio@gmail.com',
  telefone: '(13)99605-4131',
  cpf: '190.203.400-14',
  rg: '190.203.400-14',
};

type IconName = React.ComponentProps<typeof Ionicons>['name'];

export default function Profile({
  data = MOCK,
  avatar,
  onEdit,
  onSettings,
  onOpenActivities,
}: Props) {
  const fields: { icon: IconName; label: string; value: string }[] = [
    { icon: 'person-outline', label: 'Nome', value: data.nome },
    { icon: 'person-outline', label: 'Sobrenome', value: data.sobrenome },
    { icon: 'person-outline', label: 'Gênero', value: data.genero },
    { icon: 'mail-outline', label: 'Email', value: data.email },
    { icon: 'call-outline', label: 'Telefone', value: data.telefone },
    { icon: 'card-outline', label: 'CPF', value: data.cpf },
    { icon: 'card-outline', label: 'RG', value: data.rg },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <Text style={styles.screenTitle}>Perfil</Text>
          <View style={styles.topActions}>
            <Pressable onPress={onEdit} hitSlop={10}>
              <Ionicons name="create-outline" size={24} color="#000" />
            </Pressable>
            <Pressable onPress={onSettings} hitSlop={10}>
              <Ionicons name="settings-sharp" size={24} color="#000" />
            </Pressable>
          </View>
        </View>

        <View style={styles.avatarBlock}>
          {avatar ? (
            <Image source={avatar} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarFallback]}>
              <Ionicons name="person" size={56} color={colors.primary} />
            </View>
          )}
          <Text style={styles.avatarName}>{data.nome}</Text>
        </View>

        <Pressable style={styles.activitiesCard} onPress={onOpenActivities}>
          <Text style={styles.activitiesText}>Minhas Atividades</Text>
          <Ionicons name="time-outline" size={28} color={colors.text} />
        </Pressable>

        <View style={styles.infoCard}>
          {fields.map((field) => (
            <View key={field.label} style={styles.field}>
              <Ionicons name={field.icon} size={24} color={colors.accent} />
              <View>
                <Text style={styles.fieldLabel}>{field.label}</Text>
                <Text style={styles.fieldValue}>{field.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomNav active="Profile" />
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
    paddingTop: 20,
    paddingBottom: 130,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  screenTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  topActions: {
    flexDirection: 'row',
    gap: 16,
  },
  avatarBlock: {
    alignItems: 'center',
    marginTop: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarFallback: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarName: {
    fontSize: 14,
    color: colors.text,
    marginTop: 6,
  },
  activitiesCard: {
    backgroundColor: colors.white,
    borderRadius: radius.card,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activitiesText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  infoCard: {
    backgroundColor: colors.white,
    borderRadius: radius.card,
    padding: 24,
    marginTop: 28,
    gap: 20,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
  },
  fieldValue: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 1,
  },
});
