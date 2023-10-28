import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value); //store内のstateにアクセスするためのHooks
  const dispatch = useDispatch(); //actionをstoreに通知するためのHooks

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
      <h3>
        <a href="https://youtu.be/KuRu5wOyY_c?si=pBqCSOcBbWBUM_Xt">
          参考にさせていただいた動画
        </a>
      </h3>
    </div>
  );
}

export default App;
