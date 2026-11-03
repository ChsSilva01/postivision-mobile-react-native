import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius } from '../constants/appTheme';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    // Troque pela chamada real de autenticação
    router.replace('/home');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Decoração */}
      <View style={styles.circleTop} pointerEvents="none" />
      <View style={styles.arcBottomOuter} pointerEvents="none" />
      <View style={styles.arcBottomInner} pointerEvents="none" />

      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite o seu e-mail"
            placeholderTextColor={colors.placeholder}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <Text style={[styles.label, styles.labelSpacing]}>Senha</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite a sua senha"
            placeholderTextColor={colors.placeholder}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Pressable onPress={() => setShowPassword((v) => !v)} hitSlop={10}>
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={colors.placeholder}
            />
          </Pressable>
        </View>

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>

        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Não tem conta?</Text>
          <Pressable onPress={() => router.push('./register')}>
            <Text style={styles.signupLink}>Cadastre-se</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
  circleTop: {
    position: 'absolute',
    top: -140,
    right: -170,
    width: 360,
    height: 360,
    borderRadius: 180,
    borderWidth: 4,
    borderColor: colors.decoration,
  },
  arcBottomOuter: {
    position: 'absolute',
    bottom: -240,
    left: -230,
    width: 360,
    height: 360,
    borderRadius: 180,
    borderWidth: 2,
    borderColor: colors.decoration,
  },
  arcBottomInner: {
    position: 'absolute',
    bottom: -250,
    left: -215,
    width: 360,
    height: 360,
    borderRadius: 180,
    borderWidth: 2,
    borderColor: colors.decoration,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 36,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMuted,
    marginBottom: 8,
  },
  labelSpacing: {
    marginTop: 20,
  },
  inputBox: {
    height: 42,
    backgroundColor: colors.white,
    borderRadius: radius.input,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    paddingVertical: 0,
  },
  button: {
    marginTop: 64,
    height: 46,
    borderRadius: radius.button,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  signupLink: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
});
