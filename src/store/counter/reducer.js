export function counterReducer(state = { value: 0 }, action) {
  console.log("counterReducer", { action });
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
