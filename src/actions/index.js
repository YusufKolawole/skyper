import { SET_ACTIVE_USER_ID,
   DELETE_CONTACT,
    SET_TYPING_VALUE,
    SEND_MESSAGE,
    DELETE_CHAT,
    EDIT_CHAT
  } from "../constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

//the Delete chat Action

export const deleteContact = (user_id) => ({
  type: DELETE_CONTACT,
  payload: user_id
})

export const setTypingValue = (value) => ({
  type: SET_TYPING_VALUE,
  payload: value
})

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload:{
    message,
    userId
  }
})

export const deleteChat = (number, activeUserId) => ({
  type: DELETE_CHAT,
  payload: {
    number,
    activeUserId
  }
})

export const editChat = (number, activeUserId, text) => ({
  type: EDIT_CHAT,
  payload: {
    number,
    activeUserId,
    text
  }
})

