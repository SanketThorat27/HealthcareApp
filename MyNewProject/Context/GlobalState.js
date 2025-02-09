// import React, { createContext, useState } from 'react';

// // Create the Context
// export const GlobalContext = createContext();

// // Create a Provider Component
// export const GlobalProvider = ({ children }) => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   return (
//     <GlobalContext.Provider value={{ selectedItem, setSelectedItem }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

//mod-1
// import React, { createContext, useReducer } from 'react';

// // Initial State
// const initialState = {
//   items: [
//     { id: '1', name: 'Item 1', description: 'This is the description for Item 1' },
//     { id: '2', name: 'Item 2', description: 'This is the description for Item 2' },
//     { id: '3', name: 'Item 3', description: 'This is the description for Item 3' },
//   ],
//   selectedItem: null,
// };

// // Create Context
// export const GlobalContext = createContext();

// // Reducer function
// const globalReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return { ...state, items: [...state.items, action.payload] };
//     case 'SET_SELECTED_ITEM':
//       return { ...state, selectedItem: action.payload };
//     default:
//       return state;
//   }
// };

// // Create Provider Component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(globalReducer, initialState);

//   return (
//     <GlobalContext.Provider value={{ state, dispatch }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

//mod-2

import React, { createContext, useReducer } from 'react';

// Initial State
const initialState = {
  items: [
    { id: '1', name: 'Item 1', description: 'This is the description for Item 1' },
    { id: '2', name: 'Item 2', description: 'This is the description for Item 2' },
    { id: '3', name: 'Item 3', description: 'This is the description for Item 3' },
  ],
  selectedItem: null,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Reducer function
const globalReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, items: [...state.items, action.payload] };
      case 'REMOVE_ITEM':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      case 'SET_SELECTED_ITEM':
        return { ...state, selectedItem: action.payload };
      default:
        return state;
    }
  };
  

// Create Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
