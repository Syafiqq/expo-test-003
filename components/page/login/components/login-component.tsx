import {StyleSheet, View} from "react-native";
import {Button, Colors, TextField, TextFieldRef} from "react-native-ui-lib";
import React, {useEffect} from "react";
import {useLoginQuery} from "@/core/presentation/vm/use-login-query";
import {useAuth} from "@/core/presentation/store/auth-store";
import {router} from "expo-router";

export default function LoginForm() {
  const usernameTextRef = React.useRef<string | undefined>(undefined);
  const passwordTextRef = React.useRef<string | undefined>(undefined);
  const usernameRef = React.useRef<TextFieldRef>(null);
  const passwordRef = React.useRef<TextFieldRef>(null);
  const [isPasswordError, setPasswordError] = React.useState(false);

  const signIn = useAuth.use.signIn();

  let {isPending, isSuccess, data, isError, error, mutate, reset} = useLoginQuery();

  useEffect(() => {
    if (isError && error) {
      setPasswordError(true);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isPasswordError) {
      passwordRef.current?.validate()
    }
  }, [isPasswordError]);

  useEffect(() => {
    if (isSuccess && data) {
      signIn(data);
      router.replace('/(main)')
    }
  }, [isSuccess, data]);

  const onRequestLogin = async () => {
    usernameRef.current?.validate();
    passwordRef.current?.validate();
    if (usernameRef.current?.isValid() != true || passwordRef.current?.isValid() != true) {
      return;
    }

    const username = usernameTextRef.current;
    const password = passwordTextRef.current;

    if (username == undefined || password == undefined) {
      return;
    }

    reset();
    mutate({username: username, password: password});
  }

  return (
    <View
      style={styles.container}
      testID={"login-form"}
    >
      <TextField
        ref={usernameRef}
        placeholder={'Username'}
        style={styles.form}
        floatingPlaceholder
        onChangeText={text => {
          usernameTextRef.current = text;
          setPasswordError(false);
        }}
        enableErrors
        validateOnChange
        validate={['required']}
        validationMessage={['Username is required']}
        fieldStyle={styles.formField}
        testID={"username-field"}
      />
      <TextField
        ref={passwordRef}
        placeholder={'Password'}
        style={styles.form}
        floatingPlaceholder
        onChangeText={text => {
          passwordTextRef.current = text;
          setPasswordError(false);
        }}
        enableErrors
        validateOnChange
        textContentType={'password'}
        secureTextEntry={true}
        validate={['required', (_) => !isPasswordError]}
        validationMessage={['Password is required', error?.message ?? '-']}
        fieldStyle={styles.formField}
        testID={"password-field"}
      />
      <View style={{height: 32}}></View>
      <Button
        label={'Login'}
        size={Button.sizes.medium}
        backgroundColor={Colors.grey30}
        onPress={() => onRequestLogin()}
        disabled={isPending}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16
  },
  form: {},
  formField: {
    borderStyle: 'solid',
    borderBottomColor: Colors.grey50,
    borderBottomWidth: 1,
  }
});
