import {TextInput} from 'react-native';
import styled from 'styled-components/native';

interface IContainerProps {
  marginTop: number;
  marginBottom: number;
}

export const Container = styled.View<IContainerProps>`
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
`;

export const InputArea = styled.View`
  flex: 1;
  background-color: #ffffff;
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  height: 45px;
`;

export const InputText = styled(TextInput)`
  flex: 1;

  background-color: #ffffff;
  color: #000000;
`;

export const AreaEyes = styled.TouchableOpacity``;

export const ErrorArea = styled.View`
  height: 17px;
`;

export const Error = styled.Text`
  font-size: 12px;
  color: #ff0000;
`;
