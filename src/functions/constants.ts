export type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
export type Day = Weekday | 'Sat' | 'Sun';
export type APIResponse = {
  user: {
    userId: string;
    friendList: {
      count: number;
      friends: { firstName: string; lastName: string }[];
    };
  };
};
// const nextDay: Record<Weekday, Day> = { Mon: 'Tue' };
