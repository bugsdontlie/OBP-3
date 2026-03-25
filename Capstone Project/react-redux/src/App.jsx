import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/count/actions";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <br />
      <br />
      <br />
      <h1>{count}</h1>

      <br />
      <br />
      <br />

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;

/* 
  const iphones = useSelector(state=>state.app.category.mobiles.iphones)
{
  count_app: {
    count: 0,
  },
  app: {
    category:{
      products: [{

      }],
      mobiles: {
        iphones: [{}],
        samsung: [{}]
      }
    }
  }
} */
