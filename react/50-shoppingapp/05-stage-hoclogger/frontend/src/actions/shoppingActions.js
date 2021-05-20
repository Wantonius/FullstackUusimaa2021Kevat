import {loading,stopLoading,clearLoginState} from './loginActions';

export const FETCH_SHOPPINGLIST_SUCCESS = "FETCH_SHOPPINGLIST_SUCCESS";
export const FETCH_SHOPPINGLIST_FAILED = "FETCH_SHOPPINGLIST_FAILED";
export const ADD_TO_LIST_SUCCESS = "ADD_TO_LIST_SUCCESS";
export const ADD_TO_LIST_FAILED = "ADD_TO_LIST_FAILED";
export const REMOVE_FROM_LIST_SUCCESS = "REMOVE_FROM_LIST_SUCCESS"
export const REMOVE_FROM_LIST_FAILED = "REMOVE_FROM_LIST_FAILED";
export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS";
export const EDIT_ITEM_FAILED = "EDIT_ITEM_FAILED";
export const CLEAR_SHOPPING_STATE = "CLEAR_SHOPPING_STATE";

//ASYNC ACTION CREATORS


export const getList = (token,search) => {
	return (dispatch) => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json",
					"token":token}
		}
		let url = "/api/shopping"
		if(search) {
			url = url +"?type="+search
		}
		dispatch(loading());
		fetch(url,request).then((response) => {
			dispatch(stopLoading());
			if(response.ok) {
				response.json().then((data) => {
					dispatch(fetchListSuccess(data));
				}).catch((error) => {
					dispatch(fetchListFailed("Failed to parse incoming data. Reason:"+error))
				})
			} else {
				if(response.status === 403) {
					dispatch(clearLoginState());
					dispatch(clearShoppingState());
					dispatch(fetchListFailed("Session has expired. Log in again!"))
				} else {
					dispatch(fetchListFailed("Server responded with a status:"+response.statusText))
				}
			}
		}).catch((error) => {
			dispatch(stopLoading());
			dispatch(fetchListFailed("There was an error. Error:"+error));
		});
	}
}	

export const addToList = (token,item) => {
	return (dispatch) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json",
						"token":token},
			body:JSON.stringify(item)
		}
		dispatch(loading());
		fetch("/api/shopping",request).then((response) => {
			dispatch(stopLoading());
			if(response.ok) {
				dispatch(addToListSuccess());
				dispatch(getList(token));
			} else {
				if(response.status === 403) {
					dispatch(clearLoginState());
					dispatch(clearShoppingState());
					dispatch(addToListFailed("Session has expired. Log in again!"));
				} else {
					dispatch(addToListFailed("Server responded with a status:"+response.statusText))
				}
			}
		}).catch((error) => {
			dispatch(stopLoading());
			dispatch(addToListFailed("There was an error. Error:"+error));
		});
	}
}

export const removeFromList = (token,id) => {
	return (dispatch) => {
		let request = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json",
					"token":token}
		}
		dispatch(loading());
		fetch("/api/shopping/"+id,request).then((response) => {
			dispatch(stopLoading());
			if(response.ok) {
				dispatch(removeFromListSuccess());
				dispatch(getList(token));
			} else {
				if(response.status === 403) {
					dispatch(clearLoginState());
					dispatch(clearShoppingState());
					dispatch(removeFromListFailed("Session has expired. Log in again!"));
				} else {
					dispatch(removeFromListFailed("Server responded with a status:"+response.statusText))
				}
			}
		}).catch((error) => {
			dispatch(stopLoading());
			dispatch(removeFromListFailed("There was an error. Error:"+error));
		});
	}
}

export const editItem = (token,item) => {
	return (dispatch) => {
		let request = {
			method:"PUT",
			mode:"cors",
			headers:{"Content-type":"application/json",
					"token":token},
			body:JSON.stringify(item)
		}
		dispatch(loading());
		fetch("/api/shopping/"+item._id,request).then((response) => {
			dispatch(stopLoading());
			if(response.ok) {
				dispatch(editItemSuccess());
				dispatch(getList(token));
			} else {
				if(response.status === 403) {
					dispatch(clearLoginState());
					dispatch(clearShoppingState());
					dispatch(editItemFailed("Session has expired. Log in again!"));
				} else {
					dispatch(editItemFailed("Server responded with a status:"+response.statusText))
				}
			}
		}).catch((error) => {
			dispatch(stopLoading());
			dispatch(editItemFailed("There was an error. Error:"+error));
		});
	}
}
//ACTION CREATORS

export const fetchListSuccess = (list) => {
	return {
		type:FETCH_SHOPPINGLIST_SUCCESS,
		list:list
	}
}

export const fetchListFailed = (error) => {
	return {
		type:FETCH_SHOPPINGLIST_FAILED,
		error:error
	}
}

export const addToListSuccess = () => {
	return {
		type:ADD_TO_LIST_SUCCESS
	}
}

export const addToListFailed = (error) => {
	return {
		type:ADD_TO_LIST_FAILED,
		error:error
	}
}

export const removeFromListSuccess = () => {
	return {
		type:REMOVE_FROM_LIST_SUCCESS
	}
}

export const removeFromListFailed = (error) => {
	return {
		type:REMOVE_FROM_LIST_FAILED,
		error:error
	}
}

export const editItemSuccess = () => {
	return {
		type:EDIT_ITEM_SUCCESS
	}
}

export const editItemFailed = (error) => {
	return {
		type:EDIT_ITEM_FAILED,
		error:error
	}
}

export const clearShoppingState = () => {
	return {
		type:CLEAR_SHOPPING_STATE
	}
}