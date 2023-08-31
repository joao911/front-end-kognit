import React, {useState} from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  AreaEyes,
  Container,
  Error,
  ErrorArea,
  InputArea,
  InputText,
} from './styles';

interface IControlledInputProps {
  control: Control<any>;
  name: string;
  error?: FieldError;
  marginTop?: number;
  marginBottom?: number;
  placeholder: string;
}

const InputPassword: React.FC<IControlledInputProps> = ({
  control,
  name,
  error,
  marginTop = 0,
  marginBottom = 0,
  placeholder,
}) => {
  const [showPassword, setShowPassWord] = useState(true);
  return (
    <Container marginTop={marginTop} marginBottom={marginBottom}>
      <InputArea>
        <Controller
          name={name}
          control={control}
          render={({field: {onChange, value}}) => (
            <InputText
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              secureTextEntry={showPassword}
              autoCapitalize="none"
            />
          )}
        />

        <AreaEyes onPress={() => setShowPassWord(!showPassword)}>
          <Icon
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={28}
            color="black"
          />
        </AreaEyes>
      </InputArea>
      <ErrorArea>{error && <Error>{error.message}</Error>}</ErrorArea>
    </Container>
  );
};

export default InputPassword;
