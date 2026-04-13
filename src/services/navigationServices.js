import { StackActions } from '@react-navigation/routers';
import { CommonActions } from '@react-navigation/native';

import * as React from 'react';
import { Keyboard } from 'react-native';
import { store } from '../store';
// import { updateLoading } from '../store/User';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    Keyboard.dismiss();
    //   store.dispatch(updateLoading(false));
    navigationRef.current?.navigate(name, params);
}
export function goBack(params) {
    Keyboard.dismiss();
    //   store.dispatch(updateLoading(false));
    return navigationRef.current?.goBack(params);
}

// export function push(name, params) {
//   navigationRef.current &&
//     navigationRef.current.dispatch(StackActions.push(name, params));
// }

// export function reset(name, params) {
//   store.dispatch(updateLoading(false));
//   navigationRef.current?.dispatch(
//     CommonActions.reset({
//       index: 0,
//       routes: [
//         {
//           name,
//           params,
//         },
//       ],
//     }),
//   );
// }
