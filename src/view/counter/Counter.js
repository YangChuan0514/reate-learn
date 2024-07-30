import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { addNum, delNum, addToNum,asyncFun } from "../../store/modules/couterStore";
import {forwardRef, useImperativeHandle} from 'react'
const Counter = forwardRef((props, ref) => {
  const { couter, list } = useSelector((store) => store.couter);
  const dispatch = useDispatch();
  const asyncReq = async () => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    return res.data.data.channels
  };
  const asyncFUnc = async ()=>{
    const list = await asyncReq();
    console.log(list)
    dispatch(asyncFun(list))
  }
  useImperativeHandle(ref, ()=> {
      return {
        asyncFUnc,
        asyncReq
      }
  })
  return (
    <div>
      <div ref={ref}>
        <button aria-label="Increment value" onClick={() => dispatch(addNum())}>
          +
        </button>
        <span>{couter}</span>
        <span>{list.map(item => item.name).join(',')}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(delNum())}>
          -
        </button>
        <button onClick={() => dispatch(addToNum(30))}>to30</button>
        <button onClick={asyncFUnc}>toFunc</button>
      </div>
    </div>
  );
})
export default Counter
