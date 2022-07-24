import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  UserID: string | number;
  UserMail: string ;
  UserType:string;
  UserToken:string|number;
  UserIsValid:boolean;
  userName:string;
  userLastName:string;
  authRedirectPath?: string;
}

const initialState: UserState = {
  UserID: "",
  UserMail: "" ,
  UserType:"",
  UserToken:"",
  UserIsValid:false,
  userName:"",
  userLastName:'',
  authRedirectPath: '/'
};

export const userAuthentication = createSlice({
  name: "user",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<UserState>) => {
      state = {
        ...state,
        UserID: action.payload.UserID,
        UserMail: action.payload.UserMail,
        UserType:action.payload.UserType,
        UserToken:action.payload.UserToken,
        UserIsValid:action.payload.UserIsValid,
        userName:action.payload.userName,
        userLastName:action.payload.userLastName,
        authRedirectPath:action.payload.authRedirectPath?action.payload.authRedirectPath:"/"
      };
      return state;
    },
    onSetRedirectPath: (state, action: PayloadAction<string>) => {
      state = {
        ...state,
        authRedirectPath: action.payload,
      };
      return state;
    },
    removeUser: (state) => (
      state = {
        UserID: "",
        UserMail: "" ,
        UserType:"",
        UserToken:"",
        UserIsValid:false,
        userName:"",
        userLastName:'',
        authRedirectPath: '/',
      })
    ,
  },
});

// Action creators are generated for each case reducer function
export const { addNewUser, removeUser ,onSetRedirectPath } =
userAuthentication.actions;
export const userName = (state: RootState) =>
state.userReducer.userName
export const userLastName = (state: RootState) =>
state.userReducer.userLastName
export const UserID = (state: RootState) =>
state.userReducer.UserID
export const UserMail = (state: RootState) =>
state.userReducer.UserMail
export const UserType = (state: RootState) =>
state.userReducer.UserType
export const UserToken = (state: RootState) =>
state.userReducer.UserToken
export const UserIsValid = (state: RootState) =>
state.userReducer.UserIsValid
export const authRedirectPath = (state: RootState) =>
state.userReducer.authRedirectPath
export default userAuthentication.reducer;
