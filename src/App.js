import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Counter from "./view/counter/Counter";
import { useRef } from 'react'
function App() {
  const ref = useRef()
  const showRef = () => {
      ref.current.asyncFUnc()
  }
  return (
    <div className="App">
      <Counter ref={ref}></Counter>
      <Link to={'/about'}>关于</Link>
      <Link to={'/'}>面板</Link>
      <Outlet></Outlet>
      <button onClick={showRef}>展示内容</button>
    </div>
  );
}

export default App;
