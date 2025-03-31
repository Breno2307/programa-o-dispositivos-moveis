import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";

function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} variant="displaySmall">
        Login
      </Text>
      <TextInput style={styles.input} label="E-mail" mode="outlined" />
      <TextInput
        style={styles.input}
        label="Senha"
        mode="outlined"
        secureTextEntry
      />
      <Button mode="contained" onPress={() => {}} style={styles.input}>
        Entrar
      </Button>
      <Text style={styles.info}>
        Esqueceu sua senha? <Text style={styles.info}>Recuperar senha</Text>
      </Text>
      <Text style={styles.info}>Ou entre com:</Text>
      <View style={styles.buttonContainer}>
        <IconButton icon="google" onPress={() => {}} />
        <IconButton icon="facebook" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16 },
  title: { textAlign: "center", marginBottom: 24, marginTop: 16 },
  input: { marginBottom: 16 },
  info: { textAlign: "center", marginBottom: 16 },
  link: { color: "#675OA4" },
  buttonContainer: { flexDirection: "row", justifyContent: "center" },
});

export default LoginScreen;
