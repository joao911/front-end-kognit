import styled from 'styled-components/native';
import {Text} from 'react-native';

interface IContainerProps {
  marginTop: number;
  marginBottom: number;
}

export const Container = styled.View<IContainerProps>`
  flex: 1;
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  min-height: 45px;
  max-height: 45px;
  padding: 10px 20px;
  background-color: #fff;
`;

export const ErrorArea = styled.View`
  height: 17px;
  padding: 0 20px;
  margin-top: 5px;
`;

export const ErrorText = styled(Text)`
  font-size: 12px;
  color: #ff0000;
`;
