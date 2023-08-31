import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../../store';

import {
  Container,
  Header,
  Title,
  ListItems,
  Card,
  CardTitle,
  CardDescription,
  Content,
  ListNotifications,
  Touch,
  ActiveIndicator,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Home: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const {notifications} = useSelector(
    (state: RootState) => state.notifications,
  );
  const [tabBar, setTabBar] = useState(1);

  const groups = Array(8).fill({
    title: 'Acredite, você é capaz!',
    subTitle: 'Acredite, você é capaz! Supere desafios com determinação.',
  });
  const keyExtractor = useCallback(
    (_: any, index: any) => index.toString(),
    [],
  );

  const renderItem = useCallback(({item}) => {
    return (
      <Content>
        <Card>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.subTitle}</CardDescription>
        </Card>
      </Content>
    );
  }, []);

  const renderNotifications = useCallback(({item}) => {
    return (
      <Content>
        <Card>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.body}</CardDescription>
        </Card>
      </Content>
    );
  }, []);

  const getAllNotifications = () => {
    dispatch.notifications.getNotification();
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  return (
    <Container>
      <Header>
        <Touch onPress={() => setTabBar(0)}>
          <Title>kognit</Title>
          {tabBar === 0 && <ActiveIndicator />}
        </Touch>
        <Touch onPress={() => setTabBar(1)}>
          <Icon name="notifications-sharp" size={30} color="red" />
          {tabBar === 1 && <ActiveIndicator />}
        </Touch>
      </Header>

      {tabBar === 0 && (
        <ListItems
          // ListHeaderComponent={HeaderComponent}
          // stickyHeaderIndices={[0]}
          data={groups}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          // contentContainerStyle={groups.length === 0 && {flex: 1}}
        />
      )}
      {tabBar !== 0 && (
        <ListNotifications
          // ListHeaderComponent={HeaderComponent}
          // stickyHeaderIndices={[0]}
          data={notifications}
          keyExtractor={keyExtractor}
          renderItem={renderNotifications}
        />
      )}
    </Container>
  );
};

export default Home;
