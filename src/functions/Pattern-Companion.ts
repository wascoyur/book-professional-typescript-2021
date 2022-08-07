import React, { ReactNode } from 'react';
import { APIResponse, Weekday } from './constants';
import { Day } from './constants';

export const Companion = (): Array<Day> | Day => {
  // let nextDay: { [K in Weekday]: Day } = { Mon: 'Mon' };
  return 'Fri' /* nextDay */;
};
export const getNextDay = (w: Weekday) => {
  switch (w) {
    case 'Mon':
      return 'Tue';
  }
};
type FriendList = APIResponse['user']['friendList'];
const renderFriendList = (): FriendList => {
  return { count: 1, friends: [{ firstName: 'Ivan', lastName: 'Dumbo' }] };
};
type Friend = FriendList['friends'][number];
