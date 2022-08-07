import { APIResponse } from '../../functions/constants';

type ResponseKeys = keyof APIResponse;
type UserKeys = keyof APIResponse['user'];
type FriendListKeys = keyof APIResponse['user']['friendList'];
type Get = {
  <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
    o: O,
    k1: K1,
  ): O[K1][K2];
  <
    O extends object,
    K1 extends keyof O,
    K2 extends keyof O[K1],
    K3 extends keyof O[K1][K2],
  >(
    o: O,
    k1: K1,
    k2: K2,
    k3: K3,
  ): O[K1][K2][K3];
};

const get2 = <O extends object, K extends keyof O>(o: O, k: K) => {
  return o[k];
};
function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
  return o[k];
}
