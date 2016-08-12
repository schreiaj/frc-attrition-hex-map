import { combineReducers } from 'redux';
import {GEOGRAPHY, DISTRICT, CHANGE_MODE} from '../constants';

function displayMode(state = {}, action){
	switch(action.type){
		case CHANGE_MODE:
			return {mode: action.mode}
		break
	}
	return state;
}

const rootReducer = combineReducers({
  state: displayMode
});

export default rootReducer;
