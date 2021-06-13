const initialState = { name: "murat" };

export function userReducer(state = initialState, action) {
  console.log("userReducer", { action });
  switch (action.type) {
    case "user/change-name":
      return { name: action.payload };
    case "user/set-surname":
      return { surname: action.payload };
    default:
      return state;
  }
}
