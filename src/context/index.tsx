// AppContext.js
import React, {createContext, useState, useContext} from 'react';

const defaultInitialState = {
  formData: [
    {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
    },
  ],
  setFormData: () => {},
};

const AppContext = createContext(defaultInitialState);

const AppProvider = ({children}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <AppContext.Provider value={{formData, updateFormData}}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export {AppProvider, useAppContext};
