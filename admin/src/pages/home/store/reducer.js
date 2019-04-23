
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
	usernum:1,
	productnum:2,
	ordernum:3
})

export default (state=defaultState,action)=>{
	if(action.type == types.SET_COUNT){
		return state.merge({
			usernum:action.payload.usernum,
			productnum:action.payload.productnum,
			ordernum:action.payload.ordernum
		})
	}
	return state;
}