import { actionType } from "../context/reducer";

const userReducer = (state = null, action) => {
    switch (action.type) {
    //   case "GET_USER":
    //     return state;
    //   case "SET_USER":
    //     return action.user;
    case actionType.SET_USER:
        return {
            ...state,
            user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  