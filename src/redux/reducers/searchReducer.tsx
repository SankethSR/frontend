const searchReducers = (state: any, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case "rotate":
      return {
        rotating: action.payload
      };
    default:
      return state;
  }
};

export default searchReducers;