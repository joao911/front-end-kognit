export interface IState {
  notifications: INotifications[];
}

export interface INotifications {
  userId: number;
  id: number;
  title: string;
  body: string;
}
