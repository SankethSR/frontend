const initState = {
  name: "VICTIM_NAME"
}

const searchReducers = (state = initState, action: any) => {
  switch (action.type) {
    case "VICTIM_NAME":
      return {
            ...state, 
            name: action.payload
      }
    default:
      return state;
  }
};

export default searchReducers;