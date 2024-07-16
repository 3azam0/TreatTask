import {showToast} from './showmessages';

export const handelError = error => {
  const errorObj = error.response.data;
  if (errorObj.code == 422) {
    const message = Object.entries(errorObj?.errors)[0][1]?.message;
    showToast(message, 'error');
  } else {
    showToast(errorObj.message, 'error');
  }
};
