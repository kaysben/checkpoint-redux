import { ADD, EDIT, DELETE, DONE } from "./ActionTypes";
export const Add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
export const Delete = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};
export const Done = (payload) => {
  return {
    type: DONE,
    payload,
  };
};

export const Edit = (id, title, description) => {
  return {
    type: EDIT,
    payload: { id, title, description },
  };
};
