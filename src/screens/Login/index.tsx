import React from 'react';

import ImageBackgroundTeste from '../../assets/backgroundImage.jpeg';
import LogoImage from '../../assets/logo.png';

import {Container, Logo, Content, ContentLogo} from './styles';
import Input from '../../components/Input';

import Button from '../../components/Button';
import {useLogin} from './useLogin';

const Login: React.FC = () => {
  const {control, Controller, errors, handleSubmit, onSubmit} = useLogin();
  return (
    <Container source={ImageBackgroundTeste}>
      <Content>
        <ContentLogo>
          <Logo source={LogoImage} />
        </ContentLogo>
        <Controller
          name="email"
          control={control}
          render={({field}) => (
            <Input
              onChangeText={field.onChange}
              value={field.value}
              placeholder="Email *"
              error={errors.email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              marginTop={10}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({field}) => (
            <Input
              onChangeText={field.onChange}
              value={field.value}
              placeholder="Senha *"
              error={errors.password}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              marginTop={80}
            />
          )}
        />

        <Button
          title="Entrar"
          marginTop={150}
          onPress={handleSubmit(onSubmit)}
        />
      </Content>
    </Container>
  );
};

export default Login;
