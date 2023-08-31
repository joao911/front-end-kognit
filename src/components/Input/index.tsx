import React from 'react';
import {FieldError} from 'react-hook-form';
import {TextInputProps} from 'react-native';

import {Container, ErrorArea, InputText, ErrorText} from './styles';

interface InputProps extends TextInputProps {
  error?: FieldError;
  marginTop?: number;
  marginBottom?: number;
}
const Input: React.FC<InputProps> = ({
  error,
  marginTop = 0,
  marginBottom = 0,
  ...rest
}) => {
  return (
    <Container marginTop={marginTop} marginBottom={marginBottom}>
      <InputText {...rest} />

      <ErrorArea>
        {error && (
          <ErrorText style={{color: 'red', fontSize: 12}}>
            {error?.message}
          </ErrorText>
        )}
      </ErrorArea>
    </Container>
  );
};

export default Input;
