import {useReducer} from 'react';
import StateContext from '../context/StateContext';
import ReducerContext from '../context/ReducerContext';
import {ActionConstants} from '../actionconstants';

const initialState = {
	loading:false,
	list:[],
	error:""
}

const reducer = (state,action) => {
	console.log(action);
	switch(action.type) {
		case ActionConstants.LOADING:
			return {
				...state,
				loading:true,
				error:""
			}
		case ActionConstants.STOP_LOADING:
			return {
				...state,
				loading:false
			}
		case ActionConstants.FETCH_SUCCESS:
			return {
				...state,
				list:action.list,
				error:""
			}
		case ActionConstants.FETCH_FAILED:
			return {
				...state,
				error:action.error
			}
		case ActionConstants.ADD_SUCCESS:
			return {
				...state,
				error:""
			}
		case ActionConstants.ADD_FAILED:
			return {
				...state,
				error:action.error
			}
		case ActionConstants.REMOVE_SUCCESS:
			return {
				...state,
				error:""
			}
		case ActionConstants.REMOVE_FAILED:
			return {
				...state,
				error:action.error
			}
		default:
			return state;
	}
}

const StateProvider = (props) => {
	const [state,dispatch] = useReducer(reducer,initialState);
	return(
		<StateContext.Provider value={state}>
			<ReducerContext.Provider value={dispatch}>
				{props.children}
			</ReducerContext.Provider>
		</StateContext.Provider>
	)
}

export default StateProvider;