import uuid from 'react-uuid';

type Attripute = {
  id: string;
  title: string;
  description: string;
};

export const AttriputeReducer = (state: Array<Attripute>, action: any) => {
  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: uuid() }];
    case 'edit':
      // eslint-disable-next-line no-param-reassign
      state[action.index] = { ...action.newAttr };
      return [...state];
    case 'remove':
      return state.filter(ele => ele.id !== action.id);
    default:
      throw new Error('error in Attriputes Dispatcher');
  }
};
