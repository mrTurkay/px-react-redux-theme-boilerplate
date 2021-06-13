import { useContext } from "react";
import useThemeContext from "../hooks/useThemeContext";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const theme = useThemeContext();
  const count = useSelector((state) => {
    console.log({ state });
    return state.counter.value;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "counter/incremented" });
        }}
      >
        İncrement
      </button>
      <h2 style={{ backgroundColor: theme.palette.primary }}>{count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "counter/decremented", payload: "yusuf" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
