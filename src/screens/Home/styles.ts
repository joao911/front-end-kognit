import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  background-color: aliceblue;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const ListItems = styled.FlatList``;

export const Title = styled.Text``;

export const Card = styled.View`
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px;
`;

export const CardTitle = styled.Text`
  font-weight: bold;
`;

export const CardDescription = styled.Text``;

export const Content = styled.View`
  padding: 20px;
`;

export const ListNotifications = styled.FlatList``;

export const Touch = styled.TouchableOpacity`
  height: 30px;
`;

export const ActiveIndicator = styled.View`
  height: 2px;
  background-color: red;
  width: 40px;
  margin-top: 5px;
`;
