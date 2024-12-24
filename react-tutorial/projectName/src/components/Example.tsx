import Child from "./Child";

const Example = () => {
  const hello = (arg: string): string => `${arg} Function`;
  return (
    // <Child color="red" />
    <Child color="red" num={123} fn={hello} />
  );
};
export default Example;
