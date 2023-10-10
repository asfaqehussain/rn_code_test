export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

// Action called to update the form values
export const updateFormData = (data) => ({
  type: UPDATE_FORM_DATA,
  payload: data,
});