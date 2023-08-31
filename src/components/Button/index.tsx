import React from 'react';

import {Container, Title} from './styles';

interface IButtonProps {
  title: string;
  marginBottom?: number;
  marginTop?: number;
  disabled?: boolean;
  [x: string]: any;
}
const Button: React.FC<IButtonProps> = ({
  title,
  marginBottom = 0,
  marginTop = 0,
  disabled = false,
  ...props
}) => {
  return (
    <Container
      marginBottom={marginBottom}
      marginTop={marginTop}
      disabled={disabled}
      {...props}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
