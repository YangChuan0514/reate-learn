import { create } from "zustand";
const couter = (set) => {
  return {
    value: 0,
    add: () => {
      set((store) => ({
        value: ++store.value,
      }));
    },
  };
};

const couter30 = (set) => {
  return {
    value30: 30,
    add30: () => {
      set((store) => ({
        value30: ++store.value30,
      }));
    },
  };
};

const useStore = create((...a) => {
  return {
    ...couter(...a),
    ...couter30(...a)
  };
});
const Border = () => {
  const { value, add, value30 , add30} = useStore();
  return (
    <div>
      <div>我是面板</div>
      <div>{value}</div>
      <button onClick={add}>++</button>
      <div>{value30}</div>
      <button onClick={add30}>++30</button>
    </div>
  );
};
export default Border;
