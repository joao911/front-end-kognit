import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  /* justify-content: center;
  align-items: center; */
`;

export const Content = styled(SafeAreaView)`
  padding: 50px 20px;
`;

export const ContentLogo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View``;

export const Logo = styled.Image``;
