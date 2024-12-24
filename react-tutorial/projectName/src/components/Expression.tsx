

const Expression: React.FC = () => {
  const title: string = "Expression";
  const arry: number[] = [10, 20, 30, 40];
  const hello = (arg: string): string => `${arg} Function`;
  return (
    <div className="expression">
      <h3>Hello {title}</h3>
      <h3>{arry.join(',')}</h3>
      <h3>{hello("Arrow")}</h3>
    </div>
  );
};

export default Expression;