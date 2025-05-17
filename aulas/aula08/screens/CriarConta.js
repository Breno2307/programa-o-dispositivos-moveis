import { View, ScrollView } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function CriarConta() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16 }}>
        <Controller
          control={control}
          name="nome"
          rules={{require:"Nome é obrigadoria"}}
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="Nome"
              mode="outlined"
              autoCapitalize="sentences"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={errors.nome}>
          {errors.nome?.message}
        </HelperText>
        <Controller
          control={control}
          name="E-mail"
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="E-mail"
              keyboardType="email-address"
              mode="outlined"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={errors.email}>
          {errors.emaiil?.message}
        </HelperText>
        <Controller
          control={control}
          name="Senha"
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="Senha"
              secureTextEntry
              mode="outlined"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={errors.senha}>
          {errors.senha?.message}
        </HelperText>
        <Controller
          control={control}
          name="confirmar senha"
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="confirmar senha"
              secureTextEntry
              mode="outlined"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={errors.confirmarSenha}>
          {errors.confirmarSenha?.message}
        </HelperText>
        <Button mode="contained" onPress={handleSubmit(() => alert("ok"))}>
          Criar
        </Button>
      </View>
    </ScrollView>
  );
}

export default CriarConta;
