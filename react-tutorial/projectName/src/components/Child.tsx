interface ChildProps {
  color?: string;
  num: number;
  fn?: (arg: string) => string;
}

const Child = ({ color, num, fn }: ChildProps) => {
  const handleFn = (text: string): string => {
    return fn ? fn(text) : "";
  };

  return (
    <div className="component">
      <h3 style={{color}}>Child Component</h3>
      <h3>{num}</h3>
      <h3>{handleFn('Props')}</h3>
    </div>
  );
};

export default Child;
