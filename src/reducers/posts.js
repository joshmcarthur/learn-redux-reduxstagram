function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log("incrementing likes");
      const i = action.index;
      return [
        ...state.slice(0, i), // Before the record to update
        { ...state[i], likes: state[i].likes + 1 }, // Update the likes of the record
        ...state.slice(i + 1) // The records remaining after the record to update
      ];
    default:
      return state;
  }
}

export default posts;
