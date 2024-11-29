import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewGroup: false,
  isAddMember: false,
  isNotification: false,
  isMobileMenuFriend: false,
  isFileMenu: false,
  isDeleteMenu: false,
  uploadingLoader: false,
  selectedDeleteChat: {
    chatId: "",
    groupChat: false,
  },
};

const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setIsNewGroup(state, action) {
      state.isNewGroup = action.payload;
    },
    setIsAddMember(state, action) {
      state.isAddMember = action.payload;
    },
    setIsNotification(state, action) {
      state.isNotification = action.payload;
    },
    setIsMobileMenuFriend(state, action) {},
    setIsFileMenu(state, action) {
      state.isFileMenu = action.payload;
    },
    setIsDeleteMenu(state, action) {
      state.isDeleteMenu = action.payload;
    },
    setUploadingLoader(state, action) {
      state.uploadingLoader = action.payload;
    },
    setSelectedDeleteChat(state, action) {
      state.selectedDeleteChat = action.payload;
    },
  },
});
export default miscSlice;
export const { userExist, userNotExist } = miscSlice.actions;
