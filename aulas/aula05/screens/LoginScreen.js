import { View, StyleSheet } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.space, styles.TextCenter]} variant="headlineLarge">
        Login
      </Text>
      <TextInput
        style={styles.space}
        mode="outlined"
        label="E-mail"
        right={<TextInput.Icon icon="email" />}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.space}
        mode="outlined"
        label="senha"
        right={<TextInput.Icon icon="eye" />}
        secureTextEntry
      />
      <Button style={styles.space} mode="contained">
        Entrar
      </Button>
      <Text style={styles.TextCenter} variant="labelMedium">
        ou entre com:
      </Text>
      <View style={styles.iconButton}>
        <IconButton icon="google" />
        <IconButton icon="facebook" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  space: {
    marginBottom: 8,
  },
  TextCenter: {
    alignSelf: "center",
  },
  iconButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
