import { View, Text, TouchableOpacity, color } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "E-mail é obrigatorio",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "E-mail é invalido",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="E-mail"
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            error={errors.email}
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.email?.message}
      </HelperText>
      <Controller
        control={control}
        name="senha"
        rules={{
          required: "Senha é obrigatorio",
          minLength: {
            value: 8,
            message: "Deve ter no mínimo 8 caracteres",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            error={errors.senha}
          />
        )}
      />
      <HelperText type="error" visible={errors.senha}>
        {errors.senha?.message}
      </HelperText>
      <Button
        mode="contained"
        style={{ marginBottom: 16 }}
        onPress={handleSubmit((data) => alert("Ok"))}
      >
        Entrar
      </Button>
      <View style={{ justifyContent:"center", flexDirection:"row" }}>
        <Text>Esqueceu sua senha?</Text>
        <TouchableOpacity>
          <Text style={{color:"#5D0C82"}}>Recuperar Senha</Text>
    </TouchableOpacity>
      </View>
      <Button onPress={() => {}}>Criar Conta</Button>
    </View>
  );
}

export default LoginScreen;
