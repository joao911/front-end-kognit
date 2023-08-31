import {createModel} from '@rematch/core';
import {RootModel} from '../../models';

import {INotifications, IState} from './types';
import {api} from '../../../api/api';

export const notifications = createModel<RootModel>()({
  state: {
    notifications: [],
  } as IState,
  reducers: {
    setNotifications(state, payload: INotifications[]) {
      return {...state, notifications: payload};
    },
  },
  effects: dispatch => ({
    async getNotification() {
      try {
        const response = await api.get('');
        dispatch.notifications.setNotifications(response.data);
      } catch (error: any) {
        console.error('Error fetching posts:', error);
      }
    },
  }),
});
