import {PROFILE} from '../redux/action';

const initialState = {
  Profile: 'https://shop.byprogrammers.com/img/logo/logo.png',
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PROFILE:
      return {...state, Profile: action.payload};
  }
  return state;
};

export default rootReducer;
