const initialState = {
  contacts: [],
};
export const addContact = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const { values } = action.payload;

      return {
        ...state,

        contacts: [...state.contacts, values],
      };
    case "REMOVE_CONTACT":
      
      return {
        ...state,
        contacts: [
          ...state.contacts.filter((cid) => cid.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};
