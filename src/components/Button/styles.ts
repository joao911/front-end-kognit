import styled from 'styled-components/native';

interface IContainerProps {
  marginBottom: number;
  marginTop: number;
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
  height: 50px;
  background-color: #00baf2;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
`;
